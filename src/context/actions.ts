
import { ProductProps } from "../types/types";
import products from '../assets/db/db';



export const cart:ProductProps[] = [];


type ProductActionType = 
| {type: "ADD_PRODUCT_TO_CART"; payload:ProductProps}
| {type: "DELETE_PRODUCT_TO_CART"; payload:ProductProps}


export const shoppingCartReducer = ( state: typeof cart, action: ProductActionType) => {
    switch(action.type){
        case "ADD_PRODUCT_TO_CART":{
            let newProduct = products.find((product) => product.id === action.payload)
            return [...state, newProduct]
            
        }
        case "DELETE_PRODUCT_TO_CART":
            return [...state, cart.filter((product):boolean => product.id !== action.payload)]
          
            default:
                 return state;
    }
}
