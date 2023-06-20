import { CssBaseline } from '@mui/material';
import AppRouter from './Router/AppRouter'
import { SnackbarProvider } from 'notistack';

function App() {


  return (
    <>  
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <CssBaseline/>
      <AppRouter />
   </SnackbarProvider>
    </>
  )
}

export default App
