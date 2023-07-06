import {Box, Paper,  Button} from '@mui/material';
import {  useCart } from '../../context/CartProvider';

import { ProductProps, ProductsStateTypes } from '../../types/types';
import { Link } from 'react-router-dom';




export const Checkout = () => {
    const { cart }:ProductsStateTypes  = useCart();
 

 

  return (
    <>
          
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
               
                <Link to='/form'><Button variant='contained' sx={{mt:2}}>Buy now</Button></Link>
            </Box>
            {cart.map(({img, title, price, quantity}:ProductProps) => 
                
                    <Paper elevation={1} sx={{padding: 4, width:'50vw', margin:'0 auto', display:{xs:'flex', md:'flex', lg:'flex', flexDirection:'column'}, justifyContent:'space-around', alignItems:'center',flexWrap:'no-wrap', mt:2, mb:1.5}}>
                        <img style={{width:'100px'}} src={img} />  <span style={{fontWeight:'bold'}}>Product: {title}</span>  <span>Price:U$S {price * quantity}</span>  <span>Quantity:{quantity}</span>     
                    </Paper>
              
                )
            
            }

            

        
    </>
  )
}

