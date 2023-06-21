import products from "../assets/db/db";
import { ProductProps } from "../types/types";

type ProductActionType = 
| {type: "ADD_PRODUCT_TO_CART"; payload:ProductProps}
| {type: "ADD_PRODUCT_TO_WISH"; payload:ProductProps}

export const shoppingCartReducer = ( state: typeof products, action: ProductActionType) => {
    switch(action.type){
        case "ADD_PRODUCT_TO_CART":
            return [...state, action.payload]
                    
        case "ADD_PRODUCT_TO_WISH":
            return [...state, action.payload]
        default: 
        return state
    }
}