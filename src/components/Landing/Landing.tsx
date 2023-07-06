import {  Box, Button, Container, } from '@mui/material'
import './styles.css'
import { Link } from 'react-router-dom'

// type Props = {}

const Landing = () => {
  return (
    <>
    <Container className='layout_container' maxWidth='xl'  >

        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', }}>

            <h1  className='layout_title'>
              Wine Store
            </h1>
            <Link  to='/products'><Button className='layout_btn' sx={{background:'steelblue',color:'black', padding:2, width:'400px', borderRadius:'20px', ":hover":{background:'orange'}}}>Go To Products</Button></Link>
        </Box>
    </Container>

    </>
  )
}

export default Landing