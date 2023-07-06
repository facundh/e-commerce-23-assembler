
import {productsinStock} from '../api/getProducts';
import { ProductProps } from '../types/types';

const initCartStorage: ProductProps[]  = [];

export const enum REDUCER_ACTION_TYPE {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UP_A_PRODUCT,
    DOWN_A_PRODUCT
}

type CartActionType = {
    type: REDUCER_ACTION_TYPE
    payload?:string
}

const data = productsinStock;

const cartReducer =  (state: typeof initCartStorage, action: CartActionType):void | ProductProps[] | undefined => {

    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD_PRODUCT:{
            const newProduct:ProductProps = data.find(item => item.id === action.payload)
            const isInCart = state.some((item):boolean => item.id === action.payload)
            let updateItem;
            if(isInCart){
               updateItem = state.map((item:any) => (item.id === action.payload) ? {...item, quantity:item.quantity + 1}: item)
            }
            return updateItem || [...state, newProduct]
        }
        case REDUCER_ACTION_TYPE.DELETE_PRODUCT:
            return state.filter((item:any):boolean => item.id !== action.payload)
        case REDUCER_ACTION_TYPE.UP_A_PRODUCT:
            // eslint-disable-next-line no-case-declarations
            const isItemInCart = state.some((item):boolean => item.id === action.payload)
            if(isItemInCart){
                const updateCartItems = state.map((item):ProductProps =>  (item.id === action.payload) ? {...item, quantity:item.quantity + 1} : item)
                return updateCartItems
            }
            break;
        case REDUCER_ACTION_TYPE.DOWN_A_PRODUCT:
            // eslint-disable-next-line no-case-declarations
            const isItemInCartDown = state.some((item) => item.id === action.payload)
            if(isItemInCartDown){
                
                const updateCartItems = state.map((item):ProductProps =>  (item.id === action.payload) ? {...item, quantity:item.quantity - 1} : item)
                return updateCartItems
            }
            return state;
    }
}

export  {
    initCartStorage,
    cartReducer
}