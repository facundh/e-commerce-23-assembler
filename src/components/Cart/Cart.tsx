import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataUser } from '../../context/AuthProvider';
import { useCart } from '../../context/CartProvider';
import { ProductProps } from '../../types/types';


import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, CardContent, Card, CardMedia} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




export const Cart:FC = (): ReactElement => {
  const {user} = useDataUser()
  const { cart, handleDeleteProduct, handleUpdateProduct, handleDownProduct} = useCart();

  const navigate = useNavigate();
  let total = cart.reduce((acc:number, {price, quantity}):number => acc + price * quantity , 0)
  console.log(total);
  user ? total = total / 2 : total

  const totalItems = cart.reduce((acc:number, {quantity}):number => acc + quantity , 0)
  const onCheckout = () => {
    navigate('/checkout', {
      replace:true
  })
  }
  return (
    <>
        
     
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',  textAlign:'center', marginTop:1}}>
            Total Items : {totalItems}
        </Typography>
         <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bolder', fontSize:30, display:'block',textAlign:'center'}}>
         Total Price: $ {total}
        </Typography>
        <Typography sx={{textAlign:'center', mt:2}}>{user && user ? 'You Receive this package tomorrow' : 'You recevie de pacackge in ten days'}</Typography>
        <Container
            maxWidth="xl"
            sx={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"center",
                justifyContent:"center",
                padding:4,
                width:'100%',
                gap:2,
                flexDirection:'column'
            }}
        >
          {
            totalItems === 0  ?  <Button size="large" color="primary" sx={{
          margin:'0 auto'
                }} startIcon={<ShoppingCartIcon /> } disabled onClick={onCheckout}>
                    Resume
              </Button>
        :  
        <Button size="large" color="primary" sx={{
          margin:'0 auto'
        }} startIcon={<ShoppingCartIcon /> }  onClick={onCheckout}>
             Resume
        </Button>
      }
            
       {cart ?
       cart.map(({id, title, price, description, img, quantity}:ProductProps):ReactElement => (
         <>
         
        <Card key={id} sx={{  width:{sm:'700px', md:'700px',lg:'700px', xl:'900px'}, margin:{xs:'0 auto', sm:'0 auto', md:'0 auto', lg:'0 auto',xl:'0 auto'} }}>
         <CardActionArea sx={{
            display:{xs:'flex',sm:'flex' ,md:'flex',flexDirection:'column', lg:'flex', xl:'flex'},
            marginBottom:10,
            width:{xs:'410px', sm:'550px', md: 700},
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
           <CardContent sx={{display:{sm:'flex', flexDirection:'column', alignItems:'center'}}}>
             <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
               {title}
             </Typography>
             <Typography variant="subtitle1" color="GrayText">
               {description} - Price : $ {price}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions sx={{display:'flex', alignItems:'center', justifyContent:'center', background:'gray', borderRight:'1px solid gray'}} >
          
           <Button size="medium" color="primary" onClick={() => handleUpdateProduct?.(id)} >
           ➕
           </Button>
           {quantity <= 0 
           ? <Button size="medium" color="primary" disabled onClick={() => handleDownProduct?.(id)} >
             ➖
             
            </Button> 
            : 
            <Button size="medium" color="primary"  onClick={() => handleDownProduct?.(id)} >
             ➖
            </Button>  
           }
            
           <Button size="medium" color="warning" startIcon={<DeleteIcon />} onClick={() => handleDeleteProduct?.(id)}>
             Delete Product
           </Button>
         </CardActions>
       </Card>
       </>
       ))
       : null
}         

        </Container>
    
</>
    
  )
}