import { FC,  ReactElement } from 'react'
import { useSearchParams } from 'react-router-dom';
import {  useProducts } from '../../context/ProductProvider';
import { ProductsItemProps, ProductProps } from '../../types/types';
import {Cards} from '../Cards/Cards';

import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@material-ui/core';
import { Container, InputAdornment, TextField } from '@mui/material';



export const Home:FC<ProductsItemProps> = () => {

    const { products } = useProducts();
    const {title} = products;

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('q') || '';

    const handleChangeParams = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({q:target.value})
    }
  return (
    <>
    <Container fixed maxWidth="xl" sx={{display:{sm:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', md:'flex'}}}>
                   <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        sx={{width:{xs:'430px', sm:'500px', md:'600px', lg:'80vw', xl:500},marginTop:{xs:'20px', sm:'30px', md:'40px', lg:'50px', xl:'50px'}}}
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

              .map((props:ProductProps):ReactElement => (
                  <Cards {...props} />
              ))
}
      </Box>
      </Container>
  </>

  )
}

