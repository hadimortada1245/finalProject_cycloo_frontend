import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Oops from "./pages/Oops";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
function App() {

    return (
      <Router>
        
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/products" element={ <Products/>} />
            <Route path="/singleProduct" element={ <SingleProduct/>} />
            <Route path="/cart" element={ <Cart/>} />
            <Route path="/oops" element={ <Oops/>} />
          </Routes>
      </Router>
    );
  }
  
  export default App;