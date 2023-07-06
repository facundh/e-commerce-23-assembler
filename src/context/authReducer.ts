import { UserProps } from "../types/types";

export const types = {
    login: 'LOG_IN',
    logout:'LOG_OUT'
}

export const enum REDUCER_ACTION_TYPE {
    LOGING, 
    LOGOUT
}

 type reducerAction = {
    type: REDUCER_ACTION_TYPE
    payload?:string;
}

export const authReducer = (state:UserProps, action:reducerAction)=> {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOGING:
        return {
            ...state,
            isLogged:true,
            user:action.payload
        }
       case REDUCER_ACTION_TYPE.LOGOUT:
        return {
            id: '',
            isLogged:false,
            name: ''
        }

    default:
        state;
  }
}