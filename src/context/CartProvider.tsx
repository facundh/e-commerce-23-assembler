import {FC,  createContext, useContext, useEffect,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps } from '../types/types';
import { initCartStorage, cartReducer } from './cartActions';
import { initCart } from '../utils/getDataFromLocalStorage';

const CartContext = createContext<ProductsStateTypes | undefined >( {} as ProductsStateTypes);


export const CartProvider:FC<Props> = ({children}) => {
    
    const [ cart , dispatch ] = useReducer(cartReducer, initCartStorage, initCart);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
  
    const handleAddToCart= (id:string):void => {
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

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if(!cartContext){
        throw new Error('useCart must be inside the provider')
    }
    return cartContext
}

