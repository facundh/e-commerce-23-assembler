import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import { ProductProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { CartConsumer } from '../../context/CartProvider';




const Cards = (props: ProductProps) => {
    const {id, title, description, img, store, price} = props;
   
 const { handleAddToCart } = CartConsumer()
  return (
    <Card key={id} sx={{  width:'500px', marginBottom:10, marginTop:10, height:'900px' }}>
    <CardActionArea sx={{
        display:"flex",
        flexDirection:"column",
        marginBottom:10
    }}>
      <Link to={`/products/${store}`}>
        <CardMedia
        component="img"
        image={img}
        alt={store}
        sx={{height:400, gap:1}}
      />
      </Link>
      <CardContent sx={{display:"flex", flexDirection:"column"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
          Description Product: ${description}  
          
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold', mt:2}}>
          
          Price : ${price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"flex-end", marginTop:0}}>
      <Button size="small" color="primary" startIcon={<FavoriteIcon />}  >
            Add Wish List
      </Button>
      <Button size="small" color="info" startIcon={<ShoppingCartIcon />} onClick={() => handleAddToCart(id)} >
            Add Cart
      </Button>
     
    </CardActions>
    
  </Card>
  )
}

export default Cards