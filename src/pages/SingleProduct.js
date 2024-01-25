import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import goBackIcon from '../images/icons8-arrow-back-100.png'
import '../styles/singleProduct.css';
import { Link ,useNavigate ,useParams} from 'react-router-dom';
import { getProductById } from "../actions/products";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
function SingleProduct(){
    const { id } = useParams();
    const navigate=useNavigate();
    const token=localStorage.getItem('token');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch])
    const handleAddToCart=()=>{
        if(!token)navigate('/login')
    }
    return(
        <div className='single-product-c'>
            <MainNav/>
           <Link to='/products'> <div className='goBackDiv'> <img src={goBackIcon} className='goBackIcon' alt='goBackIcon'/></div></Link>
          {products && products[0]  &&<div className='single-container'>
                <div className='product-info'>
                    <p className='product-name'>{products[0].company}</p>
                    <p className='product-type'>{products[0].name}</p>
                    <p className='product-description'>{products[0].description}</p>
                    <div className='product-price'>
                        <p className='single-price'>${products[0].price}</p>
                        <button className='single-button' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
                <img  className='single-product-img' src={products[0].img} alt ='single-product'/>
            </div>}
            <Footer/>
        </div>
    );
}
export default SingleProduct;