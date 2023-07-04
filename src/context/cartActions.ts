
import {productsinStock} from '../api/getProducts';
import { ProductProps } from '../types/types';

const initCartStorage: ProductProps[] = [];

type CartActionType =
    | {type: "ADD_PRODUCT", payload: ProductProps}
    | {type: "DELETE_PRODUCT", payload: ProductProps}
    | {type: "ADD_A_PRODUCT", payload: ProductProps}
    | {type: "DELETE_A_PRODUCT", payload: ProductProps}

const data = productsinStock;

const cartReducer =  (state: typeof initCartStorage, action: CartActionType):void | ProductProps[] => {
   
    
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
        case "ADD_A_PRODUCT":
            // eslint-disable-next-line no-case-declarations
            const isItemInCart = state.some((item:any) => item.id === action.payload)
            if(isItemInCart){
                const updateCartItems = state.map((item:any):ProductProps =>  (item.id === action.payload) ? {...item, quantity:item.quantity + 1} : item)
                return updateCartItems
            }
            break;
        case "DELETE_A_PRODUCT":
            // eslint-disable-next-line no-case-declarations
            const isItemInCartDown = state.some((item:any) => item.id === action.payload)
            if(isItemInCartDown){
                
                const updateCartItems = state.map((item:any):ProductProps =>  (item.id === action.payload) ? {...item, quantity:item.quantity - 1} : item)
                return updateCartItems
            }
            return state;
    }
}

export  {
    initCartStorage,
    cartReducer
}