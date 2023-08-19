import './App.css';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import CartWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <header>
            <Logo />
            <NavBar />
            <CartWidget />
          </header>
          <main>
            <Routes>
              <Route
                path='/'
                element={<ItemListContainer message={'Productos'} />}
              />
              <Route
                path='/category/:idCategory'
                element={<ItemListContainer message={'Productos'} />}
              />
              <Route path='/item/:idItem' element={<ItemDetailsContainer />} />
              <Route path='/cart' element={<ShoppingCart />} />
              <Route path='*' element={<h2>404 Page not Found</h2>} />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
