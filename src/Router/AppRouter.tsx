import { ReactElement } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


import { Navbar } from '../components';
import { HomePage } from '../pages/HomePage';

import { WishPage } from '../pages/WishPage';
import { ResumePage } from '../pages/ResumePage';
import ErrorPage from '../pages/ErrorPage';
import ProductDetailPage from '../pages/ProductDetailPage';







const AppRouter = ():ReactElement => {
  return (
    <>
   
      <BrowserRouter>
       <Navbar />
     
        <Routes>
          <Route path='/products' element={<HomePage />}/>
          <Route path='products/:productStore' element={<ProductDetailPage />}/>
          <Route path='/wish' element={<WishPage />}/>
          <Route path='/cart' element={<ResumePage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRouter