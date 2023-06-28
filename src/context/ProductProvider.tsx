import {FC,  createContext, useContext, useEffect,useState,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps, ProductActionType } from '../types/types';
import {  useSnackbar } from 'notistack';
import { useSearchParams } from 'react-router-dom';




const ProductContext = createContext<ProductsStateTypes | undefined>(undefined);

export const ProductConsumer = ():ProductsStateTypes| ProductProps | undefined => useContext(ProductContext);
 

const ProductProvider: FC<Props> = ({children}) => {
    
    const [products, setProducts] = useState<[]>([]);


    const { enqueueSnackbar} = useSnackbar();
    // const [cart, dispatchCart] = useReducer(shoppingCartReducer, Cart, init);

    useEffect(() => {
        const getProducts = async():Promise<void> => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL);
                const data =    await response.json();
                setProducts(data)
            } catch (error) {
                console.log('error');
            }
        }
           getProducts();
 
            
    },[])

    // const handleAddToCart = (id:string):void => {
    //     enqueueSnackbar('Added to cart', {variant:'success'}),
    //     dispatchCart({
    //         type:'ADD_PRODUCT_TO_CART',
    //         payload:id
    //     })
    // }
    // const handleDeleteProduct = (id:string):void => {
    //     enqueueSnackbar('Deleted Product', {variant:'error'}),
    //     dispatchCart({
    //         type:'DELETE_PRODUCT_TO_CART',
    //         payload:id
    //     })
    // }


    
 
  return (
    <>
        <ProductContext.Provider value={{products}}>
                {children}
        </ProductContext.Provider>
    </>
  )
}

export  { ProductProvider }