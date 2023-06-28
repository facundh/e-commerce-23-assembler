import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { ProductProps } from '../../types/types';



const Cards = (props: ProductProps) => {

  return (
    <Card key={props.id} sx={{ width:450 ,maxWidth: '100%', marginBottom:10, marginTop:10, height:850 }}>
                    
    <CardActionArea sx={{
        display:"flex",
        flexDirection:"column",
        marginBottom:10
    }}>
      <CardMedia
        component="img"
        image={props.img}
        alt={props.store}
        sx={{height:400, gap:1}}
      />
      <CardContent sx={{display:"flex", flexDirection:"column"}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
          Description Product: ${props.description}  
          
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold', mt:2}}>
          
          Price : ${props.price}
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
      <Link to={`/products/${props.store}`}>
            <Button size="small" color="success" startIcon={<ShareIcon />}>
              Details Product
            </Button>
      </Link>
    </CardActions>
    
  </Card>
  )
}

export default Cards