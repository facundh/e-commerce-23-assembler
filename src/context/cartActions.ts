
import getProducts from '../api/getProducts';
import { ProductProps } from '../types/types';


const initCartStorage: ProductProps[] = [];


type CartActionType =
    | {type: "ADD_PRODUCT", payload: ProductProps}
    | {type: "DELETE_PRODUCT", payload: ProductProps}
    | {type: "UPDATE_PRODUCT", payload: ProductProps}

const ProductsInStock = async( ):Promise<[]> => {
    const info = await getProducts()
    return info
}

const data = await ProductsInStock();
const cartReducer =  (state: typeof initCartStorage, action: CartActionType):void | ProductProps[] => {
   
   console.log(data);
    switch (action.type) {
        case "ADD_PRODUCT":{
            
            const newProduct:ProductProps = data.find(item => item.id === action.payload)
            const isInCart = state.some((item:any):boolean => item.id === action.payload)
            let updateItem;
            if(isInCart){
               updateItem = state.map((item:any) => (item.id === action.payload) ? {...item, quantity:item.quantity + 1}: item)
            }
            return updateItem || [...state, newProduct]
        }
        case "DELETE_PRODUCT":
            return state.filter((item:any):boolean => item.id !== action.payload)
        case "UPDATE_PRODUCT":
            // eslint-disable-next-line no-case-declarations
            const isItemInCart = state.some((item:any) => item.id === action.payload)
            if(isItemInCart){
                const updateCartItems = state.map((item:any):ProductProps =>  (item.id === action.payload) ? {...item, quantity:item.quantity + 1} : item)
                return updateCartItems
            }
            return state;
    }
}

export  {
    initCartStorage,
    cartReducer
}