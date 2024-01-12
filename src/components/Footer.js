import '../styles/footer.css';
import mailIcon from '../images/icons8-email-24.png';
import phoneIcon from '../images/icons8-phone-50.png';
import instaIcon from '../images/icons8-instagram-50.png';
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-container-d1">
            <Link to ='/'> <p className="cycloo-footer">Cycloo</p></Link>
                <p className='footer-p'>The best community to be healthy and powerfull.
                Enjoy our safe rides and get our wonderful products.</p>
                <p className='footer-copyright'>© Copyright Cycloo 2024</p>
            </div>
            <div className='footer-container-d2'>
            <Link to ='/trails'><p className='footer-pages'>Trails</p></Link>
            <Link to ='/products'> <p className='footer-pages'>Products</p></Link>
            <Link to ='/about'><p className='footer-pages'>About us</p></Link>
            <Link to ='/contact'><p className='footer-pages'>Contuct us</p></Link>
                
            </div>
            <div className='footer-container-d3'>
                <div className='social-media'><img className='footer-icon' src={mailIcon} alt='social'/><p className='footer-pages'> cycloo@gmail.com</p></div>
                <div className='social-media'><img className='footer-icon' src={instaIcon} alt='social'/><p className='footer-pages'>@cycloo.leb</p></div>
                <div className='social-media'><img className='footer-icon' src={phoneIcon} alt='social'/><p className='footer-pages'>+96171039078</p></div>
            </div>
        </div>
    );
}
export default Footer;