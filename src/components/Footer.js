import '../styles/footer.css';
import mailIcon from '../images/icons8-email-24.png';
import phoneIcon from '../images/icons8-phone-50.png';
import instaIcon from '../images/icons8-instagram-50.png';
function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-container-d1">
                <p className="cycloo-footer">Cycloo</p>
                <p className='footer-p'>The best community to be healthy and powerfull, we are your back.</p>
                <p className='footer-copyright'>© Copyright Cycloo 2024</p>
            </div>
            <div className='footer-container-d2'>
                <p className='footer-pages'>Products</p>
                <p className='footer-pages'>Trails</p>
                <p className='footer-pages'>Contuct us</p>
                <p className='footer-pages'>About us</p>
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