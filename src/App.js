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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const token=localStorage.getItem('token');
const role=localStorage.getItem('role');
console.log(token,role);
    return (
      <div>
      <ToastContainer/> 
      <Router>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/products" element={ <Products/>} />
            <Route path="/singleProduct/:id" element={ <SingleProduct/>} />
            <Route path="/cart" element={ <Cart/>} />
            <Route path="/login" element={ !token&&<Login/>} /> 
            <Route path="/signUp" element={ !token&&<SignUp/> } /> 
            <Route path="/trails" element={ <TrailsPage/>} /> 
            <Route path="/dashboard" element={ ( role==="user")?<UserDashboard/>:<Oops/>} /> 
            <Route path="/admin"  element={(role==="admin")? <AdminDashboard/>: <Oops/>} /> 
            <Route path="*" element={ <Oops/>} /> 
          </Routes>
      </Router>
      </div>
    );
  }
  
  export default App;