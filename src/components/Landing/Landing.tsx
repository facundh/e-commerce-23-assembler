import {  Button, Container } from '@mui/material'
import './styles.css'
import { Link } from 'react-router-dom'

// type Props = {}

const Landing = () => {
  return (
    <>
    <Container className='layout_container' sx={{ display:'flex', justifyContent:'center', alignItems:'center', height:'677px', flexDirection:'column', gap:4}}>
    
        <h1 className='layout_title' >Welcome Wine Store</h1>
        <Link  to='/products'><Button className='layout_btn' sx={{background:'steelblue',color:'black', padding:2, width:'400px', borderRadius:'20px'}}>Go To Products</Button></Link>
    </Container>

    </>
  )
}

export default Landing