import { FC,  ReactElement } from 'react'

import {  ProductProps, ProductsStateTypes } from '../../types/types';

import { ProductConsumer } from '../../context/ProductProvider';
import {  useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@material-ui/core';
import Cards from '../Cards/Cards';
import { InputAdornment, TextField } from '@mui/material';



export const Home:FC<ProductsStateTypes> = () => {
    
    const { products} = ProductConsumer();
    console.log(products);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const query = searchParams.get('q');
    

    const handleChangeParams = ({target}) => {
        setSearchParams({q:target.value})
    }

  return (
    <>

     
      <TextField
       hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        sx={{marginLeft:30, width:'60%',marginTop:10, alignSelf:'center'}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }
                      }
                        onChange={handleChangeParams}
                        value={query}
                        name='filter'
                        type='text'
                       />
      <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-around'}}>

              
              {products && products
                  .filter(({title}) => {
                    if(!query) return true
                    if(query) {
                      const nameLower = title.toLowerCase();
                      return nameLower.includes(query.toLowerCase())
                    }
                  })

              .map(({id, img, store, title, description, price, quantity}:ProductProps):ReactElement => (

                  <Cards id={id} img={img} store={store} title={title} description={description} quantity={quantity} price={price} />
              ))

}
      </Box> 
  </>

  )
}

