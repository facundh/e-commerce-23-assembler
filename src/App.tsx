
import { ProductProvider } from './context/ProductProvider';
import WebRoutes from './Router/WebRoutes.routes';
import { CartProvider } from './context/CartProvider';
import { ThemeConfig } from './config/theme.config';

function App() {


  return (
    <>  
        
                <ThemeConfig>
          <ProductProvider>
            <CartProvider>
                  <WebRoutes /> 
            </CartProvider>
          </ProductProvider>
                </ThemeConfig>
     
    </>
  )
}

export default App
