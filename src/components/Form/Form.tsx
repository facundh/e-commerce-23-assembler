import { Button, Typography, Box} from "@mui/material"

import { useDataUser } from "../../context/AuthProvider"
import { Link } from "react-router-dom";
import {  useCart } from "../../context/CartProvider";


export const Form = () => {
  const { cart } = useCart();
  const {user} = useDataUser()

let total = cart.reduce((acc:number, item:number):number => acc + item.price * item.quantity , 0)
console.log(total);
user ? total = total / 2 : total


 
  return (
    <>
  
      <Typography variant={'h3'} sx={{textAlign:'center', mb:2}}>Thank you for your purchase {user ? user.name : ''}</Typography>
            <Typography sx={{textAlign:'center', mt:2, mb:2}}>{user && user ? 'You will receive your order tomorrow' : 'You will receive your order in ten days'}</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <Typography variant='h5'> Total due: U$S {total}</Typography>
                <Link to='/products'><Button variant='contained' sx={{mt:2}}>Go to Products</Button></Link>
            </Box>
    </>
    
  )
}
