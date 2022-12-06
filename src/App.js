import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Product from './Component/Products/Product';
import Products from './Component/Product/Products';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Products></Products>
      
    </div>
  );
}

export default App;
