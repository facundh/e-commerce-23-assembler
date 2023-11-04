import { ReactElement, useState, FC } from 'react';
import { NavLink} from "react-router-dom";
import { NavListDrawer } from "./NavListDrawer";
import { Button, Drawer, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';


import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { UserProps} from '../../types/types';
import { useDataUser } from '../../context/AuthProvider';





const navLinks = [
  {
      title:'Home',
      path:"/products",
      icon:<HomeIcon />
  },
  {
      title:'Cart',
      path:"/cart",
      icon:<ShoppingCartCheckoutIcon />
  },
]

export const Navbar:FC<UserProps> = ():ReactElement => {
  const { user, login, logout } = useDataUser();

  const [open, setOpen] = useState<boolean>(false);

  const onLogin = () => {
    login('Pepe')
  }

  const onLogout = () => {
    logout();

  }

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
        justifyContent:"space-around",
        alignItems:"center",
        width:'100%'
      }}>
          <Toolbar sx={{width:'100vw', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
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
            <Box>
            { ! user ? '' : user.name}
              {
                !user ? <Button variant='contained' sx={{ml:2}} onClick={onLogin}>
                             Login
                        </Button>
                      :
             
                    <Button variant='contained' sx={{ml:2}} onClick={onLogout}>
                      Logout
                    </Button> 
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
