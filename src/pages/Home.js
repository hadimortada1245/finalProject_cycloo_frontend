import '../styles/home.css';
import MainNav from '../components/MainNav.js';
import Footer from '../components/Footer.js';
import aboutImg from '../images/Frame 4.png'
import easy from '../images/icons8-easy-50.png'
import van from '../images/icons8-van-50.png'
import healthy from '../images/icons8-healthy-64 (2).png'
import safe from '../images/icons8-safety-50.png'
import bike1 from '../images/image 3.png'
import map from '../images/WhatsApp Image 2023-12-27 at 13.15.37.jpeg'
import rideImg from '../images/bicycle (1).jpg'
function Home(){
    return(
        <>
            <MainNav/>
            <div className='header'>
                <div className='header-content'>
                    <p className='p-hero'>Pedaling means making a real contribution to cleaner air and healthy life.</p>
                    <button className='hero-join'>Join us</button>
                </div>
            </div>
            <div className='about-section'>
    <h2>About Cycloo</h2>
    <div className='home-about'>
        <div className='home-about-img'>
            <img src={aboutImg} alt='about'/>
        </div>
        <div className='home-about-text'>
            <p className='home-about-text-p'>Reflect on yourself by cycling in all directions.</p>
            <p className='how-about-second'>With cycloo, you are sure to feel healthy, and comfortable, cycling is a relatively extreme sport and requires quite a lot of energy to be expended. By cycling, you are sure to feel healthy, and comfortable, cycling is a relatively extreme sport and requires quite a lot of energy to be expended.</p>
        </div>
    </div>
</div>
        <div className='home-section-icons'>
            <div className='home-section-icons-d'>
                <img src={safe} alt='safe'/>
                <p className='subtitle'>SAFE</p>
            </div>
            <div className='home-section-icons-d'>
                <img src={healthy} alt='healthy'/>
                <p className='subtitle'>Healthy</p>
            </div>
            <div className='home-section-icons-d'>
                <img src={easy} alt='EASY'/>
                <p className='subtitle'>EASY</p>
            </div>
            <div className='home-section-icons-d'>
                <img src={van} alt='SUPPORTED'/>
                <p className='subtitle'>SUPPORTED</p>
            </div>
        </div>
        <div className='latest-products'>
            <h2 className='latest-h2'>latest products</h2>
            <div className='home-products'>
                <div className='single-item'>
                    <img className='home-img-item'src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item'>
                    <img className='home-img-item' src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
                <div className='single-item'>
                    <img className='home-img-item' src={bike1} alt='item'/>
                    <p className='item-p'>Scott</p>
                    <div className='item-t-p'>
                        <p>Road bike</p>
                        <p>1300$</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='rides-h'>
        <h2 className='latest-h2'>latest rides</h2>
        <div className='ride'>
            <div className='ride-f'>
                <div className='ride-f-t'>
                    <p className='ride-title'>Quaroun</p>
                    <p className='ride-p'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                </div>
                <div className='ride-f-imgs'>
                    <img className='mapImg' src={map} alt='map'/>
                    <img className='imgRide' src={rideImg} alt='ride'/>
                </div>
            </div>
            <div className='ride-s'>
                <div className='rideData'>
                    <div className='rideData-g'>
                        <p className='rideData-title'>Distance</p>
                        <p className='rideData-p'>51.03 km</p>
                    </div>
                    <div className='rideData-g'>
                        <p className='rideData-title'>Date</p>
                        <p className='rideData-p'>13/1/2024</p>
                    </div>
                    <div className='rideData-g'>
                        <p className='rideData-title'>Time</p>
                        <p className='rideData-p'>7:00 am</p>
                    </div>
                    <div className='rideData-g'>
                        <p className='rideData-title'>Location</p>
                        <p className='rideData-p'>Jezzine</p>
                    </div>
                    <div className='rideData-g'>
                        <p className='rideData-title'>Difficulty</p>
                        <p className='rideData-p'>Easy</p>
                    </div>
                    <div className='rideData-g1'>
                        <p className='rideData-title'>Cost</p>
                        <p className='rideData-p'>Free</p>
                    </div>
                </div>
                <div>
                    <button className='view-all-rides'>View all</button>
                </div>
            </div>

        </div>
        </div>
        <Footer/>
        </>
    );
}
export default Home;