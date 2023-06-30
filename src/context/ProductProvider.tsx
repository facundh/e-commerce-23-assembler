import {FC,  createContext, useContext, useEffect,useState,useReducer} from 'react';
import { Props, ProductsStateTypes, ProductProps } from '../types/types';


const ProductContext = createContext<ProductsStateTypes | undefined>(undefined);


const ProductProvider: FC<Props> = ({children}) => {

    const [products, setProducts] = useState<[]>([]) || undefined;
    

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


   

  return (
    <>
        <ProductContext.Provider value={{products}}>
                {children}
        </ProductContext.Provider>
    </>
  )
}

const ProductConsumer = ():ProductsStateTypes| ProductProps | undefined => useContext(ProductContext);

export  { ProductProvider, ProductConsumer }