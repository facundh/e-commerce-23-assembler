import {FC,  createContext, useContext, useEffect,useReducer} from 'react';
import { ProductsStateTypes } from '../types/types';
import { initCartStorage, cartReducer, REDUCER_ACTION_TYPE } from './cartActions';
import { initCart } from '../utils/getDataFromLocalStorage';

const CartContext = createContext<ProductsStateTypes>( {} as ProductsStateTypes);



export const CartProvider:FC<ProductsStateTypes> = ({children}) => {
    
    const [ cart , dispatch ] = useReducer(cartReducer, initCartStorage, initCart);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
  
    const handleAddToCart= (id:string):void => {
        dispatch({
            type:REDUCER_ACTION_TYPE.ADD_PRODUCT,
            payload:id
        })
    }
    const handleDeleteProduct = (id:string) => {
        dispatch({
            type:REDUCER_ACTION_TYPE.DELETE_PRODUCT,
            payload:id
        })
    }
    const handleUpdateProduct = (id:string) => {
        dispatch({
            type:REDUCER_ACTION_TYPE.UP_A_PRODUCT,
            payload:id
        })
    }
    const handleDownProduct = (id:string) => {
        dispatch({
            type:REDUCER_ACTION_TYPE.DOWN_A_PRODUCT,
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

