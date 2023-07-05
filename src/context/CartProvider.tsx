import {FC,  createContext, useContext, useEffect,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps } from '../types/types';
import { initCartStorage, cartReducer } from './cartActions';
import { initCart } from '../utils/getDataFromLocalStorage';

const CartContext = createContext<ProductsStateTypes | undefined >(undefined);


const CartProvider:FC<Props> = ({children}) => {
    
    const [ cart , dispatch ] = useReducer(cartReducer, initCartStorage, initCart);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
  
    const handleAddToCart = (id:any) => {
      
        dispatch({
            type:"ADD_PRODUCT",
            payload:id
        })
    }
    const handleDeleteProduct = (id:any) => {
        dispatch({
            type:"DELETE_PRODUCT",
            payload:id
        })
    }
    const handleUpdateProduct = (id:any) => {
        dispatch({
            type:"ADD_A_PRODUCT",
            payload:id
        })
    }
    const handleDownProduct = (id:any) => {
        dispatch({
            type:"DELETE_A_PRODUCT",
            payload:id
        })
    }

    return(
        <>
            <CartContext.Provider value={{handleAddToCart, cart, handleDeleteProduct, handleUpdateProduct,  handleDownProduct}}>
                {children}
            </CartContext.Provider>
        
        </>
    )

}

const CartConsumer = ():ProductsStateTypes| ProductProps | undefined => useContext(CartContext);

export { CartProvider,CartConsumer }