import '../styles/home.css';
import MainNav from '../components/MainNav.js';
import Footer from '../components/Footer.js';
import aboutImg from '../images/Frame 4.png'
import easy from '../images/icons8-easy-50.png'
import van from '../images/icons8-van-50.png'
import healthy from '../images/icons8-healthy-64 (2).png'
import safe from '../images/icons8-safety-50.png'
import {  useNavigate } from 'react-router-dom';
import {getLatestRide} from '../actions/rides.js';
import {getThreeProducts} from '../actions/products.js'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
function Home() {
    const navigate=useNavigate();
    const token=localStorage.getItem('token');
    const joinUsFn=()=>{
        if(!token){navigate('/login');return;}
        navigate('/trails');
    }
    const rides = useSelector((state) => state.rides);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLatestRide());
        dispatch(getThreeProducts());
    }, [dispatch]);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    console.log(products);
    return (
        <>
            <MainNav />
            <div className='header'>
                <div className='header-content'>
                    <p className='p-hero'>Pedaling means making a real contribution to cleaner air and healthy life.</p>
                    <button className='hero-join' onClick={()=>joinUsFn()}>Join us</button>
                </div>
            </div>
            <div className='about-section'>
                <h2>About Cycloo</h2>
                <div className='home-about'>
                    <div className='home-about-img'>
                        <img src={aboutImg} alt='about' />
                    </div>
                    <div className='home-about-text'>
                        <p className='home-about-text-p'>Reflect on yourself by cycling in all directions.</p>
                        <p className='how-about-second'>With cycloo, you are sure to feel healthy, and comfortable, cycling is a relatively extreme sport and requires quite a lot of energy to be expended. By cycling, you are sure to feel healthy, and comfortable, cycling is a relatively extreme sport and requires quite a lot of energy to be expended.</p>
                    </div>
                </div>
            </div>
            <div className='home-section-icons'>
                <div className='home-section-icons-d'>
                    <img src={safe} alt='safe' />
                    <p className='subtitle'>SAFE</p>
                </div>
                <div className='home-section-icons-d'>
                    <img src={healthy} alt='healthy' />
                    <p className='subtitle'>Healthy</p>
                </div>
                <div className='home-section-icons-d'>
                    <img src={easy} alt='EASY' />
                    <p className='subtitle'>EASY</p>
                </div>
                <div className='home-section-icons-d'>
                    <img src={van} alt='SUPPORTED' />
                    <p className='subtitle'>SUPPORTED</p>
                </div>
            </div>
            <div className='latest-products'>
                <h2 className='latest-h2'>latest products</h2>
                <div className='home-products'>
                    {products&&products.map((product,index)=>(

                   <div className='single-item single' onClick={()=>navigate('/products')} key={index}>
                        <img className='home-img-item' src={product.img} alt='item' />
                        <p className='item-p'>{product.company}</p>
                        <div className='item-t-p'>
                            <p>{product.name}</p>
                            <p>{product.price}$</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='rides-h'>
                <h2 className='latest-h2'>latest rides</h2>
                {rides&&rides[0]&&<div className='ride'>
                    <div className='ride-f'>
                        <div className='ride-f-t'>
                            <p className='ride-title'>{rides[0].title}</p>
                            <p className='ride-p'>{rides[0].description}</p>
                        </div>
                        <div className='ride-f-imgs'>
                            <img className='mapImg' src={rides[0].mapImg} alt='map' />
                            <img className='imgRide' src={rides[0].img} alt='ride' />
                        </div>
                    </div>
                    <div className='ride-s'>
                        <div className='rideData'>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Distance</p>
                                <p className='rideData-p'>{rides[0].distance} km</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Date</p>
                                <p className='rideData-p'>{validDate(rides[0].date)}</p>
                            </div>
                            <div className='rideData-g rideData-g3'>
                                <p className='rideData-title'>Time</p>
                                <p className='rideData-p'>{rides[0].time} am</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Location</p>
                                <p className='rideData-p'>{rides[0].location}</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Difficulty</p>
                                <p className='rideData-p'>{rides[0].difficuly}</p>
                            </div>
                            <div className='rideData-g1'>
                                <p className='rideData-title'>Cost</p>
                                <p className='rideData-p'>Free</p>
                            </div>
                        </div>
                        <div>
                            <button className='view-all-rides' onClick={()=>navigate('/trails')}>View all</button>
                        </div>
                    </div>

                </div>}
            </div>
            <Footer />
        </>
    );
}
export default Home;