import { Box, Button, CardActions, Container, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import DeleteIcon from '@mui/icons-material/Delete';



export const Wish = () => {


  return (
    <>
    <Container maxWidth="xl" sx={{ display:{xs:'flex'}}}>
      <ImageList variant="standard" cols={4} gap={7} sx={{mt:3}}>
        {
        //   wish.map(({id,title,price,description,brand,img}) => (
        //     <ImageListItem sx={{textAlign:'center', width:300, height:200 ,bgcolor:'lightBlue'}} key={id}>
        //         <img
        //           src={img}
        //           srcSet={img}
        //           alt={title}
                  
        //         />
        //         <ImageListItemBar position="below" title={title} sx={{fontWeight:'bold'}} /> <ImageListItemBar position="below" title={`Price:€${price}`} sx={{fontWeight:'bold'}} />
        //         <CardActions sx={{display:{xs:'flex', flexDirection:'column', }}}>
        //           <Button size="medium" color="primary" startIcon={<ShoppingBasket />}>
        //               Buy Now
        //           </Button>
        //    <Button size="medium" color="primary" startIcon={<DeleteIcon />}>
        //      Delete Product
        //    </Button>
        //  </CardActions>

        //     </ImageListItem>
        //   ))
        }
      </ImageList>
    </Container>
    </>
    
  )
}
