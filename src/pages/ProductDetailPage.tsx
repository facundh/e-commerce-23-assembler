import { Link, useParams } from 'react-router-dom';
import { ProductConsumer } from '../context/ProductProvider';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  ReactElement } from 'react';
import { Box } from '@mui/material';

const ProductDetailPage = ():ReactElement => {

    const { productStore } = useParams();
    const {products} = ProductConsumer();

    const wineSelected = products.find(product => product.store === productStore);
    const {title, description,  price, img, store} = wineSelected;
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:'400', marginTop:10}}>

                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                image={img}
                alt={store}
                sx={{height:400}}
                />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                    U$S {price}
                </Typography>
                </CardContent>
                <CardActions>
                <Link to='/products'><Button size="small">Go Back</Button></Link>
                
                </CardActions>
            </Card>
    </Box>
  )
}

export default ProductDetailPage