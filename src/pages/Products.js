import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import bike1 from '../images/image 3.png'
import bike2 from '../images/image 7.png'
import bike3 from '../images/image 1.png'
import bike4 from '../images/image 9.png'
import '../styles/products.css';
import searchIcon from '../images/icons8-search-50.png';
function Products(){
    return(
        <div className='porducts-p-c'>
            <MainNav/>
            <div className='products-c-content'>
                <div className='filter-container'>
                    <select name='filterBy' className='filterBy'>
                        <option  className='filterBy-option' value={`All products`}>All products</option>
                        <option  className='filterBy-option' value={`Bicycles`}>Bicycles</option>
                        <option className='filterBy-option'  value={`Clothes`}>Clothes</option>
                        <option  className='filterBy-option' value={`Acessories`}>Acessories</option>
                    </select>
                    <div className='search-div'>
                        <input className='search-input' type='text' placeholder='Search'/>
                        <img src={searchIcon} className='searchIcon' alt='searchIcon'/>
                    </div>
                </div>
                <div className='products-container-p'>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike3} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike4} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item single'>
                    <img className='home-img-item' src={bike2} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Products;