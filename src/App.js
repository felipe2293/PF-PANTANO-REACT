import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { CartScreen } from './components/CartScreen/CartScreen';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import { Checkout } from './components/Checkout/Checkout';



function App() {
  
  return (
    <CartProvider>
      <div>

        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Brindamos productos para las soluciones del futuro" />} />
            <Route path='/productos/:categoryType' element={<ItemListContainer saludo="Cargando productos..." />} />
            <Route path='/detalle/:itemId' element={<ItemDetailContainer mensaje="Cargando Producto..." />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/carrito' element={<CartScreen />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>

        </Router>

      </div>
    </CartProvider>


  );
}

export default App;
