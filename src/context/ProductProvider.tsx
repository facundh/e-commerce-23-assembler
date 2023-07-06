import {FC,  createContext, useContext, useEffect,useState} from 'react';
import {   ProductProps } from '../types/types';
import { getProducts } from '../api/getProducts';

const ProductContext = createContext<ProductProps>({} as ProductProps);


export const ProductProvider: FC<ProductProps> = ({children}) => {

    const [products, setProducts] = useState<ProductProps>();
    
    
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
        <ProductContext.Provider value={{products, setProducts}}>
                {children}
        </ProductContext.Provider>
    </>
  )
}

export const useProducts = () => {
    const productContext = useContext(ProductContext);
    if(!productContext){
        throw new Error('You are not inside de Provder')
    }

    return productContext
}

