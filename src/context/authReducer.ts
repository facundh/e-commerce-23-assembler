import { UserProps } from "../types/types";

export const types = {
    login: 'LOG_IN',
    logout:'LOG_OUT'
}

export const authReducer = (state:UserProps, action:types)=> {
  switch (action.type) {
    case types.login:
        return {
            ...state,
            isLogged:true,
            user:action.payload
        }
       case types.logout:
        return {
            id: '',
            isLogged:false,
            name: ''
        }

    default:
        state;
  }
}