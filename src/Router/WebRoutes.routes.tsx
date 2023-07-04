import { ReactElement } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


import {  Navbar } from '../components';
import { HomePage, ResumePage } from '../pages/index.ts';

import { WishPage } from '../pages/wish/WishPage';
import {ErrorPage} from '../pages/error/ErrorPage.tsx';
import {ProductDetailPage} from '../pages/productDetails/ProductDetailPage';
import {LandingPage} from '../pages/landing/LandingPage';
import { AuthConsumer } from '../context/AuthProvider';
import { ProtectedRoute } from '../utils/ProtectedRoute';
import { CheckoutPage } from '../pages/checkout/CheckoutPage';








const WebRoutes = ():ReactElement => {
  const {user} = AuthConsumer()
  return (
    <>
   
      <BrowserRouter>
       <Navbar />
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/products' element={<HomePage  />}/>
          <Route path='/products/:productStore' 
          element={
              <ProtectedRoute user={user}>
                <ProductDetailPage /> 
              </ProtectedRoute>}/>
          <Route path='/wish' element={<WishPage />}/>
          <Route path='/cart' element={<ResumePage />}/>
          <Route path='/checkout' element={<CheckoutPage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default WebRoutes