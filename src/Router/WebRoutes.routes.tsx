import { ReactElement } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {  Navbar } from '../components';
import { HomePage, ResumePage } from '../pages/index';

import {ErrorPage} from '../pages/error/ErrorPage';
import {ProductDetailPage} from '../pages/productDetails/ProductDetailPage.tsx';
import {LandingPage} from '../pages/landing/LandingPage.tsx';
import { useDataUser } from '../context/AuthProvider';
import { ProtectedRoute } from '../utils/ProtectedRoute.tsx';
import { CheckoutPage } from '../pages/checkout/CheckoutPage.tsx';
import { FormPage } from '../pages/form/FormPage';

const WebRoutes = ():ReactElement => {
  const {user} = useDataUser();
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/products' element={<HomePage cart={[]} handleAddToCart={function (id: string): void {
            throw new Error('Function not implemented.');
          } } handleDeleteProduct={function (id: string): void {
            throw new Error('Function not implemented.');
          } } handleUpdateProduct={function (id: string): void {
            throw new Error('Function not implemented.');
          } } handleDownProduct={function (id: string): void {
            throw new Error('Function not implemented.');
          } }  />}/>
          <Route path='/products/:productStore' 
          element={
              <ProtectedRoute user={user}>
                <ProductDetailPage /> 
              </ProtectedRoute>}/>
          <Route path='/form' element={ <FormPage />}/>
                 
          <Route path='/cart' element={<ResumePage />}/>
          <Route path='/checkout' element={<CheckoutPage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default WebRoutes