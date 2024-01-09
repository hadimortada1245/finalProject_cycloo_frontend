import '../styles/mainNav.css';
import {Link} from 'react-router-dom';
import dashboardIcon from '../images/icons8-dashboard-50.png';
import cartIcon from '../images/icons8-cart-48.png';
function MainNav (){
    return (
        <div className="mainNav">
            <div className='cycloo'><Link to ='/'>Cycloo</Link></div>
            <div>
                <ul>
                    <li className='navItem'><Link to ='/trails'>Trails</Link></li>
                    <li className='navItem'><Link to ='/product'>Products</Link></li>
                    <li className='navItem'><Link to ='/about'>About</Link></li>
                    <li className='navItem'><Link to ='/contuct'>Contact</Link></li>
                    <li><Link to ='/cart'> <img className ='cartIcon'src={cartIcon} alt='cart'/></Link></li>
                    <li><Link to ='/dashboard'><img className='dashboardIcon' src={dashboardIcon} alt='dashboard'/></Link></li>
                    <li><Link to='/login'><button className='mainNav-ul-li-button'>Login/Sign up</button></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default MainNav;