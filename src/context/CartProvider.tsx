import {FC,  createContext, useContext, useEffect,useReducer} from 'react';
import {  ProductsStateTypes} from '../types/types';
import { initCartStorage, cartReducer } from './cartActions';
import { initCart } from '../utils/getDataFromLocalStorage';

const CartContext = createContext<ProductsStateTypes | undefined >( {} as ProductsStateTypes);


export const CartProvider:FC<ProductsStateTypes> = ({children}) => {
    
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
    const handleDeleteProduct = (id:string) => {
        dispatch({
            type:"DELETE_PRODUCT",
            payload:id
        })
    }
    const handleUpdateProduct = (id:string) => {
        dispatch({
            type:"UP_A_PRODUCT",
            payload:id
        })
    }
    const handleDownProduct = (id:string) => {
        dispatch({
            type:"DOWN_A_PRODUCT",
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

