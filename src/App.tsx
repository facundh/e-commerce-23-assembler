import { CssBaseline } from '@mui/material';
import AppRouter from './Router/AppRouter'
import { SnackbarProvider } from 'notistack';
import { ProductProvider } from './context/ProductProvider';

function App() {


  return (
    <>  
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <ProductProvider>
                <CssBaseline/>
                <AppRouter />
          </ProductProvider>
      </SnackbarProvider>
    </>
  )
}

export default App
