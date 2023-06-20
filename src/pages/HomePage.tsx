import { FC,  ReactElement } from 'react'
import products from '../assets/db/db';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export const HomePage:FC = () => {

  return (
<>

        <Container
            maxWidth="auto"
            sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"center",
                justifyContent:"space-between"
               
            }}
        >
       {products.map(({id, img, brand, title, description, price}):ReactElement => (
         <Card key={id} sx={{ maxWidth: 345, marginBottom:10, marginTop:10 }}>
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
             <Typography variant="body2" color="text.secondary">
               {description} - Price : ${price}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
           <Button size="small" color="primary">
             <FavoriteIcon />
           </Button>
           <Button size="small" color="primary">
             <ShoppingCartIcon />
           </Button>
         </CardActions>
       </Card>
       ))
}
        </Container>
</>
    
  )
}

