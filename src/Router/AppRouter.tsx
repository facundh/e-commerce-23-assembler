import { ReactElement } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import { Navbar } from '../components';
import { HomePage } from '../pages/HomePage';

import { WishPage } from '../pages/WishPage';
import { ResumePage } from '../pages/ResumePage';
import ErrorPage from '../pages/ErrorPage';





const AppRouter = ():ReactElement => {
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>

          <Route path='/wish' element={<WishPage />}/>
          <Route path='/cart' element={<ResumePage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter