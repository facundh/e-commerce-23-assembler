import { Home } from "../components"
import { ProductsStateTypes } from '../types/types';
import { ReactElement } from 'react';


export const HomePage = (props:ProductsStateTypes): ReactElement => {

  return (
    <>
      <Home {...props}/>
    </>
    
  )
}

