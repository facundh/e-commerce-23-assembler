import {FC,  createContext, useContext, useEffect,useState,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps } from '../types/types';
import { initCartStorage, cartReducer } from './cartActions';


const CartContext = createContext<ProductsStateTypes | undefined>(undefined);

const init = () => {
    return JSON.parse(localStorage.getItem("cart") as string) || initCartStorage
}

const CartProvider:FC<Props> = ({children}) => {
    
    const [ cart , dispatch ] = useReducer(cartReducer, initCartStorage, init);
    const [clicked, setClicked] = useState<boolean>(false)
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
            type:"UPDATE_PRODUCT",
            payload:id
        })
    }

    return(
        <>
            <CartContext.Provider value={{handleAddToCart, cart, handleDeleteProduct, handleUpdateProduct, clicked, setClicked}}>
                {children}
            </CartContext.Provider>
        
        </>
    )

}

const CartConsumer = ():ProductsStateTypes| ProductProps | undefined => useContext(CartContext);

export { CartProvider,CartConsumer }