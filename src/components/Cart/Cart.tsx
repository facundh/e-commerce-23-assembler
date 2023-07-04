import { FC, ReactElement, useState, useEffect } from 'react';


import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, CardContent, Card, CardMedia, Box} from '@mui/material';
import { CartConsumer } from '../../context/CartProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductProps } from '../../types/types';
import { useNavigate } from 'react-router-dom';




export const Cart:FC = (): ReactElement => {

  const { cart, handleDeleteProduct, handleUpdateProduct, handleDownProduct} = CartConsumer();

  const navigate = useNavigate();

  const onCheckout = () => {
    navigate('/checkout', {
      replace:true
  })
  }
  return (
    <>
        
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',  textAlign:'center', marginTop:1}}>
            Total Items : {cart.reduce((acc:number, item:number):number => acc + item.quantity , 0)}
 
        </Typography>
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',textAlign:'center'}}>
         Total Price: {cart.reduce((acc:number, item:number):number => acc + item.price * item.quantity , 0)}
        </Typography>

        <Container
            maxWidth="md"
            sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"center",
                justifyContent:"center",
                padding:4,
                width:'100%',
                gap:2
            }}
        >
       {
       cart.map(({id, title, price, description, img, quantity}:ProductProps):ReactElement => (
         <>

         <Card key={id} sx={{  width:'700px', marginBottom:10, marginTop:10, height:'100%' }}>
         <CardActionArea sx={{
            display:"flex",
            
            marginBottom:10,
            width:'700px'
         }}>
          <Typography variant='subtitle2' sx={{fontSize:'25px', display:'block', margin:'20px' }}>
            {quantity}
          </Typography>
           <CardMedia
             component="img"
             image={img}
             alt={title}
             sx={{width:'100px'}}
           />
           <CardContent >
             <Typography gutterBottom variant="h5" component="div">
               {title}
             </Typography>
             <Typography variant="subtitle1" color="GrayText">
               {description} - Price : ${price}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions sx={{display:'flex', alignItems:'center', justifyContent:'center', background:'gray', borderRight:'1px solid gray'}} >
           <Button size="medium" color="success" startIcon={<ShoppingCartIcon /> } onClick={onCheckout}>
             Buy Now
           </Button>
           <Button size="medium" color="primary" onClick={() => handleUpdateProduct(id)} >
           ➕
           </Button>
           {quantity <= 0 
           ? <Button size="medium" color="primary" disabled onClick={() => handleDownProduct(id)} >
             ➖
             
            </Button> 
            : 
            <Button size="medium" color="primary"  onClick={() => handleDownProduct(id)} >
             ➖
            </Button>  
           }
           
           <Button size="medium" color="warning" startIcon={<DeleteIcon />} onClick={() => handleDeleteProduct(id)}>
             Delete Product
           </Button>
         </CardActions>
       </Card>
       </>
       ))
}         

        </Container>
    
</>
    
  )
}