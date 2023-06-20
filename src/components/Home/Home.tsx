import { FC,  ReactElement } from 'react'
import products from '../../assets/db/db'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import {useSnackbar} from 'notistack'


export const Home:FC = () => {
    const { enqueueSnackbar} = useSnackbar();
    const handleClickCart = ():void => {
        enqueueSnackbar("Agregado al carrito", { variant:'success'})
    }
  
    const handleClickWish = ():void => {
        enqueueSnackbar("Agregado a la lista de deseos", { variant:'success'})
    }

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
       {products.map(({id, img, brand, title, description, price}):ReactElement => (
     

         <Card key={id} sx={{ width:450 ,maxWidth: '100%', marginBottom:10, marginTop:10 }}>
             
         <CardActionArea sx={{
             display:"flex",
             flexDirection:"column",
             marginBottom:10
         }}>
           <CardMedia
             component="img"
             image={img}
             alt={brand}
             sx={{height:250, gap:5}}
           />
           <CardContent>
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
         <CardActions>
           <Button size="small" color="primary" startIcon={<FavoriteIcon />} onClick={handleClickWish} >
                Add Wish List
            
           </Button>
           <Button size="small" color="info" startIcon={<ShoppingCartIcon />} onClick={handleClickCart}>
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

