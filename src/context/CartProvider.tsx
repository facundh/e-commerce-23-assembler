import {FC,  createContext, useContext, useEffect,useState,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps, ProductActionType } from '../types/types';
import { useSnackbar } from 'notistack';
import { cart as Cart, shoppingCartReducer} from './actions';

const CartContext = createContext<ProductsStateTypes | undefined>(undefined);

export const CartConsumer = ():ProductsStateTypes| ProductProps | undefined => useContext(CartContext);
 

const init = () => {
    return JSON.parse(localStorage.getItem('cart') as string) || Cart
}

const ProductProvider: FC<Props> = ({children}) => {

    const { enqueueSnackbar} = useSnackbar();
    const [cart, dispatchCart] = useReducer(shoppingCartReducer, Cart, init);
    

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart]);


    const handleAddToCart = (id:string):void => {

        enqueueSnackbar('Added to cart', {variant:'success'}),
        dispatchCart({
            type:'ADD_PRODUCT_TO_CART',
            payload:id
        })
    }
    const handleDeleteProduct = (id:string):void => {
        enqueueSnackbar('Deleted Product', {variant:'error'}),
        dispatchCart({
            type:'DELETE_PRODUCT_TO_CART',
            payload:id
        })
    }

 
  return (
    <>
        <ProductContext.Provider value={{handleAddToCart, productsHome, handleDeleteProduct, cart}}>
                {children}
        </ProductContext.Provider>
    </>
  )
}

export  { ProductProvider }