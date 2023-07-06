import { createContext, FC, useContext, useReducer } from 'react';
import { UserProps } from '../types/types';
import { authReducer, REDUCER_ACTION_TYPE } from './authReducer';

export const AuthContext = createContext<UserProps>({} as UserProps);

const init = () => {
  const user =  JSON.parse(localStorage.getItem("user") as string)
  return {
    user
  }
}

export const AuthProvider:FC<UserProps> = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, [] , init);

    const login = (name = '') => {
        const user = {
          id: 1,
          name,
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type:REDUCER_ACTION_TYPE.LOGIN, payload:user})
      }

    const logout = () => {
      localStorage.removeItem('user');
      dispatch({
        type: REDUCER_ACTION_TYPE.LOGOUT
      })
    }

  return (
    <AuthContext.Provider value={{...authState, login:login, logout:logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useDataUser = () => {
  const userDataContext = useContext(AuthContext);
  if(!userDataContext){
    throw new Error('useDataUser should be inside the provider')
  }
  return userDataContext
}

