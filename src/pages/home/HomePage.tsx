import { Home } from "../../components"
import { ProductsStateTypes } from '../../types/types';



export const HomePage = (props:ProductsStateTypes )=> {

  return (
    <>
      <Home {...props}/>
    </>
    
  )
}



