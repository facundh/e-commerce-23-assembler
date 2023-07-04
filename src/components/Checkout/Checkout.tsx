import {Box, Paper, Typography} from '@mui/material';
import { CartConsumer } from '../../context/CartProvider';
import { AuthConsumer } from '../../context/AuthProvider';



export const Checkout = () => {
    const { cart } = CartConsumer();
    const {user} = AuthConsumer()

  let total = cart.reduce((acc:number, item:number):number => acc + item.price * item.quantity , 0)
  console.log(total);
  user ? total = total / 2 : total

  return (
    <>
            <Typography variant={'h3'} sx={{textAlign:'center', mb:2}}>Thanks for your Purcharse</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Typography variant='h5'> Total due: {total}</Typography>
            </Box>
            {cart.map(({img, title, price, quantity}) => 
            <Paper sx={{padding: 4, width:'90vw', margin:'0 auto', display:'flex', justifyContent:'space-around', alignItems:'center', mt:2, mb:1.5}}>
                <img style={{width:'100px'}} src={img} />  <span style={{fontWeight:'bold'}}>Product: {title}</span>  <span>Price:U$S {price}</span>  <span>Quantity:{quantity}</span>     
            </Paper>)}



        
    </>
  )
}

