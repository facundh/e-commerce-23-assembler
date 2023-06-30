import { FC, ReactElement, useState, useEffect } from 'react';


import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, CardContent, Card, CardMedia, Box} from '@mui/material';
import { CartConsumer } from '../../context/CartProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




export const Cart:FC = (): ReactElement => {

  const { cart, handleDeleteProduct, handleUpdateProduct} = CartConsumer();

  return (
    <>
    
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',  textAlign:'center', marginTop:1}}>
            Total Items : {cart.reduce((acc:number, item) => acc + item.quantity , 0)}
 
        </Typography>
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',textAlign:'center'}}>
         Total Price: {cart.reduce((acc:number, item) => acc + item.price * item.quantity , 0)}
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

         <Card key={id} sx={{  width:'500px', marginBottom:10, marginTop:10, height:'100%' }}>
         <CardActionArea sx={{
            display:"flex",
            flexDirection:"column",
            marginBottom:10,
         }}>
          <Typography variant='subtitle2' sx={{fontSize:'25px', display:'flex', alignSelf:'flex-end',  borderRadius:'50%', fontWeight:'bold',padding:'5px'  }}>
            {quantity}
          </Typography>
           <CardMedia
             component="img"
             image={img}
             alt={title}
             
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
         <CardActions sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
           <Button size="medium" color="primary" startIcon={<ShoppingCartIcon />}>
             Buy Now
           </Button>
           <Button size="medium" color="primary" onClick={() => handleUpdateProduct(id)} >
             Add Product + 1
             
           </Button>
           <Button size="medium" color="primary" startIcon={<DeleteIcon />} onClick={() => handleDeleteProduct(id)}>
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