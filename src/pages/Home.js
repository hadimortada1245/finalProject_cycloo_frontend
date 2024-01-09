import '../styles/home.css';
import MainNav from '../components/MainNav.js';
import aboutImg from '../images/login3.webp'
import easy from '../images/icons8-easy-50.png'
import van from '../images/icons8-van-50.png'
import healthy from '../images/icons8-healthy-64 (2).png'
import safe from '../images/icons8-safety-50.png'
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
        </>
    );
}
export default Home;