import { ReactElement, useState } from "react"
import { NavLink } from "react-router-dom";
import { NavListDrawer } from "./NavListDrawer";
import { Button, Drawer, AppBar, Toolbar, IconButton, Box, TextField, InputAdornment } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const navLinks = [
  {
      title:'Home',
      path:"/",
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
                
                      <TextField
                         hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        sx={{marginLeft:20, width:"400px"}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                       />
                      
            </Box>
          </Toolbar>
      </AppBar>
 
      <Drawer open={open} anchor="left" onClose={handleClose} sx={{display:{ xs:'flex', sm:'flex', md:'flex'}}}>
        <NavListDrawer handleClose={handleClose} navLinks={navLinks} setOpen={setOpen}/>
      </Drawer>
    </header>
  )
}

