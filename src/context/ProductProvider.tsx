import {FC,  createContext, useContext, useEffect,useState,useReducer} from 'react';
import { Props, ProductsStateTypes } from '../types/types';
import { useSnackbar } from 'notistack';
import { shoppingCartReducer } from './actions';
import products from '../assets/db/db';
import { getProductsFromLocalStorageCart, getProductsFromLocalStorageWish } from '../utils/getDataFromLocalStorage';

const ProductContext = createContext<ProductsStateTypes | undefined>(undefined);

export const ProductConsumer = ():ProductsStateTypes | undefined => useContext(ProductContext);

const ProductProvider: FC<Props> = ({children}) => {
    const cart = getProductsFromLocalStorageCart();
    const wish =  getProductsFromLocalStorageWish();

    // useEffect(() => {
    //     getProductsFromLocalStorageCart();
    //     getProductsFromLocalStorageWish();
    // }, [])

    const [ cartProducts, setCartProducts ] = useState(cart || []);
    const [ wishProducts, setWishProducts ] = useState(wish || []);
    
    
    
    const [shoes, dispatch] = useReducer(shoppingCartReducer, products);
    const { enqueueSnackbar} = useSnackbar();
    console.log(shoes)
   

    const handleAddToCart = (id:any) => {
        enqueueSnackbar('Added to cart', {variant:'success'}),
        dispatch({
            type:'ADD_PRODUCT_TO_CART',
            payload:id
        })
        return setCartProducts(localStorage.setItem('cart', JSON.stringify([...cart, id])))
    }

    const handleAddToWish = (id:any) => {
        enqueueSnackbar('Added to Wish List', {variant:'info'}),
        dispatch({
            type:'ADD_PRODUCT_TO_WISH',
            payload:id
        })
        return setWishProducts(localStorage.setItem('wish', JSON.stringify([...wish, id])))
    }
  return (
    <>
        <ProductContext.Provider value={{handleAddToCart, handleAddToWish, cartProducts, wishProducts,shoes}}>
                {children}
        </ProductContext.Provider>
    </>
  )
}

export  { ProductProvider }