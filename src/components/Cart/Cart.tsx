import { FC, ReactElement, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container} from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductConsumer } from '../../context/ProductProvider';
import { ProductProps } from '../../types/types';




export const Cart:FC = () => {
  // const {handleDeleteProduct, cart} = ProductConsumer();
 
  return (
    <>
    <Container sx={{display:'flex', gap:10}}>
        <Container
            maxWidth="md"
            sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"flex-start",
                justifyContent:"space-between",
                padding:4,
                width:'100%',
            }}
        >

       {/* {
       cart.map(({id, title, price, description, img}:ProductProps):ReactElement => (
        
         <Card key={id} sx={{ maxWidth: 345, marginBottom:10, marginTop:10 }}>
         <CardActionArea sx={{
            display:"flex",
            flexDirection:"column",
            marginBottom:10,
         }}>
           <CardMedia
             component="img"
             image={img}
             alt={title}
             sx={{height:250, gap:5}}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {title}
             </Typography>
             <Typography variant="body2" color="text.secondary">
               {description} - Price : ${price}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions sx={{display:{xs:'flex', flexDirection:'column', }}}>
           <Button size="medium" color="primary" startIcon={<ShopIcon />}>
             Buy Now
           </Button>
           <Button size="medium" color="primary" >
             Add Product + 1
           </Button>
           <Button size="medium" color="primary" startIcon={<DeleteIcon />} onClick={() => handleDeleteProduct(id)}>
             Delete Product
           </Button>
         </CardActions>
       </Card>
       ))
} */}
        </Container>
            <Container  sx={{
            maxWidth:'xs',
            bgcolor:'red',
            maxHeight:200,
            mt:10,
            textAlign:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'

          }}>
            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30}}>
                Total $1000
             </Typography>
         </Container>

    </Container>
    
         
</>
    
  )
}