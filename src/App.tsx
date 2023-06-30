import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ProductProvider } from './context/ProductProvider';
import WebRoutes from './Router/WebRoutes.routes';
import { CartProvider } from './context/CartProvider';

function App() {


  return (
    <>  
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <ProductProvider>
            <CartProvider>
                <CssBaseline/>
                <WebRoutes />
            </CartProvider>
          </ProductProvider>
      </SnackbarProvider>
    </>
  )
}

export default App
