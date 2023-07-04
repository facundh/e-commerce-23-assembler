import { createContext, FC, useContext, useReducer } from 'react';
import { UserProps } from '../types/types';
import { authReducer, types } from './authReducer';

export const AuthContext = createContext<UserProps | undefined>(undefined);

const init = () => {
  const user =  JSON.parse(localStorage.getItem("user") as string) 
  return {
    isLogged: !!user,
    user
  }
}

export const AuthProvider:FC<UserProps> = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);
    const login = (name = '') => {
    const user = {
      id: 1,
      name,
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch({type:types.login, payload:user})
    }

    const logout = () => {
      localStorage.removeItem('user');
      dispatch({
        type: types.logout
      })
    }

  return (
    <AuthContext.Provider value={{...authState, login:login, logout:logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = ():UserProps| undefined => useContext(AuthContext);

