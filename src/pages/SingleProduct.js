import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import bike1 from '../images/image 3.png'
import goBackIcon from '../images/icons8-arrow-back-100.png'
import '../styles/singleProduct.css';
import { Link } from 'react-router-dom';
function SingleProduct(){
    return(
        <div className='single-product-c'>
            <MainNav/>
           <Link to='/products'> <div className='goBackDiv'> <img src={goBackIcon} className='goBackIcon' alt='goBackIcon'/></div></Link>
            <div className='single-container'>
                <div className='product-info'>
                    <p className='product-name'>Pacific</p>
                    <p className='product-type'>MTB-27</p>
                    <p className='product-description'>Twitter MTB Bike in a sleek 27-inch size! This trail-blazing mountain bike combines cutting-edge design with the rugged performance you need for off-road adventures.</p>
                    <div className='product-price'>
                        <p className='single-price'>$2700</p>
                        <button className='single-button'>Add to cart</button>
                    </div>
                </div>
                <img  className='single-product-img' src={bike1} alt ='single-product'/>
            </div>
            <Footer/>
        </div>
    );
}
export default SingleProduct;