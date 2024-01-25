import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import '../styles/products.css';
import searchIcon from '../images/icons8-search-50.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductsByType } from '../actions/products';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
function Products() {
    const searchTerm = useRef(null);
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    const sort = (value) => {
        if (value === "All products")
            dispatch(getAllProducts());
        else if (value === "Bicycles")
            dispatch(getProductsByType("Bicycle"));
        else if (value === "Clothes")
            dispatch(getProductsByType("Clothes"));
        else
            dispatch(getProductsByType("Accessories"));
    }
    const handleSearch = () => {
        if (!searchTerm.current.value) return;
        const filteredProducts = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.current.value.toLowerCase()) ||
                product.company.toLowerCase().includes(searchTerm.current.value.toLowerCase())
        );
        dispatch({
            type: 'getProductsBySearch',
            payload: filteredProducts,
        });
    };
    console.log(products);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className='porducts-p-c'>
            <MainNav />
            <div className='products-c-content'>
                <div className='filter-container'>
                    <select name='filterBy' className='filterBy' onChange={(e) => sort(e.target.value)}>
                        <option className='filterBy-option' value={`All products`}  >All products</option>
                        <option className='filterBy-option' value={`Bicycles`}>Bicycles</option>
                        <option className='filterBy-option' value={`Clothes`}>Clothes</option>
                        <option className='filterBy-option' value={`Acessories`}>Acessories</option>
                    </select>
                    <div className='search-div'>
                        <input className='search-input' type='text' placeholder='Search' onKeyPress={handleKeyPress} ref={searchTerm} />
                        <img src={searchIcon} className='searchIcon' alt='searchIcon' onClick={() => handleSearch()} />
                    </div>
                </div>
                <div className='products-container-p'>
                    {products && products.map((product, index) => (

                        <Link to={`/singleProduct/${product.id}`} key={index}>
                            <div className='single-item single' key={index}>
                                <img className='home-img-item' src={product.img} alt='item' />
                                <p className='item-p'>{product.company}</p>
                                <div className='item-t-p'>
                                    <p>{product.name}</p>
                                    <p>{product.price}$</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Products;