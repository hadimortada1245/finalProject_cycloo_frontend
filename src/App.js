import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Oops from "./pages/Oops";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TrailsPage from "./pages/TrailsPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
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
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/signUp" element={ <SignUp/>} /> 
            <Route path="/trails" element={ <TrailsPage/>} /> 
            <Route path="/dashboard" element={ <UserDashboard/>} /> 
            <Route path="/admin" element={ <AdminDashboard/>} /> 
          </Routes>
      </Router>
    );
  }
  
  export default App;