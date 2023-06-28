import { ReactElement, useState } from "react"
import { NavLink } from "react-router-dom";
import { NavListDrawer } from "./NavListDrawer";
import { Button, Drawer, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const navLinks = [
  {
      title:'Home',
      path:"/products",
      icon:<HomeIcon />
  },
  {
      title:'Wish',
      path:"/Wish",
      icon:<StarIcon />
  },
  {
      title:'Cart',
      path:"/cart",
      icon:<ShoppingCartCheckoutIcon />
  },
]

export const Navbar = ():ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  

  const handleOpen = ():void =>  {
    setOpen(true)
  }
  const handleClose = ():void =>  {
    setOpen(false)
  }
  return (
    <header>
      <AppBar position="static" sx={{
        padding:2, 
        background:"orange",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
          <Toolbar>
            <IconButton size="small"   onClick={handleOpen} sx={{display:{xs:'flex', sm:'flex', md:'none', color:'white'}}  } >
              <MenuIcon sx={{flexGrow:1}} />
            </IconButton>
            <Box sx={{display:{ xs:'none', sm:'none', md:'flex'}}}>
                {
                  navLinks.map((item) => (
                    <Button color="inherit" key={item.title} component={NavLink} to={item.path}>
                      {item.title}
                    </Button>
                  ))
                }

            </Box>
          </Toolbar>
      </AppBar>
 
      <Drawer open={open} anchor="left" onClose={handleClose} sx={{display:{ xs:'flex', sm:'flex', md:'flex'}}}>
        <NavListDrawer handleClose={handleClose} navLinks={navLinks} setOpen={setOpen}/>
      </Drawer>
    </header>
  )
}

