import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './styles/app.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
