
import { ProductProvider } from './context/ProductProvider';
import WebRoutes from './Router/WebRoutes.routes';
import { CartProvider } from './context/CartProvider';
import { ThemeConfig } from './config/theme.config';
import { AuthProvider } from './context/AuthProvider';

function App() {


  return (
    <>  
        
          <ThemeConfig>
            <AuthProvider>
            <ProductProvider>
              <CartProvider>
                  <WebRoutes /> 
              </CartProvider>
            </ProductProvider>
            </AuthProvider>
          </ThemeConfig>
     
    </>
  )
}

export default App
