import { FC,  ReactElement, useState } from 'react'
import Card from '@mui/material/Card';
import {  ProductProps, ProductsStateTypes } from '../../types/types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import { ProductConsumer } from '../../context/ProductProvider';


export const Home:FC<ProductsStateTypes> = () => {
    const { products } = ProductConsumer();
 
   

  return (
<>

        <Container
            maxWidth="xl"
            sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"center",
                justifyContent:"space-between"
               
            }}
        >
       {products.map(({id, img, brand, title, description, price, quantity}:ProductProps):ReactElement => (

         <Card key={id} sx={{ width:450 ,maxWidth: '100%', marginBottom:10, marginTop:10, height:850 }}>
             
         <CardActionArea sx={{
             display:"flex",
             flexDirection:"column",
             marginBottom:10
         }}>
           <CardMedia
             component="img"
             image={img}
             alt={brand}
             sx={{height:400, gap:1}}
           />
           <CardContent sx={{display:"flex", flexDirection:"column"}}>
             <Typography gutterBottom variant="h5" component="div">
               {title}
             </Typography>
             <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
               Description Product: ${description} - 
              
             </Typography>
             <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold', mt:2}}>
               
               Price : ${price}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:0}}>
           <Button size="small" color="primary" startIcon={<FavoriteIcon />}  >
                Add Wish List
           </Button>
           <Button size="small" color="info" startIcon={<ShoppingCartIcon />} >
                Add Cart
           </Button>
           <Button size="small" color="success" startIcon={<ShareIcon />}>
             Share
           </Button>
         </CardActions>
        
       </Card>

      
       ))
}
      
        </Container>
</>
    
  )
}

