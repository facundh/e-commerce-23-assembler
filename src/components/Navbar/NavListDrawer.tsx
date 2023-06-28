import { Box, List, ListItem, ListItemText ,ListItemIcon,  ListItemButton} from '@mui/material'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

// type Props = {}



export const NavListDrawer = ({navLinks,  setOpen}):ReactElement => {
     
  return (
    <Box sx={{width:250}}>
            <nav>
                <List>
                    {
                        navLinks.map((item:any):ReactElement => (
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton component={NavLink} to={item.path} onClick={() => {setOpen(false)}}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
    </Box>
  )
}

