import '../styles/mainNav.css';
import {Link, useNavigate} from 'react-router-dom';
import dashboardIcon from '../images/icons8-dashboard-50.png';
import cartIcon from '../images/icons8-cart-48.png';
import menutIcon from '../images/icons8-menu-50.png';
import xIcon from '../images/icons8-x-48.png';
import { useState } from 'react';
function MainNav (){
    const [showMenu,setShowMenu]=useState(false);
    const navigate=useNavigate();
    const handleLogoutAction=()=>{
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="mainNav">
            <div className='cycloo'><Link to ='/'>Cycloo</Link></div>
            <div>
                <ul>
                    <li className='navItem'><Link to ='/trails'>Trails</Link></li>
                    <li className='navItem'><Link to ='/products'>Products</Link></li>
                    <li className='navItem'><Link to ='/about'>About</Link></li>
                    <li className='navItem'><Link to ='/contact'>Contact</Link></li>
                    <li><Link to ='/cart'> <img className ='cartIcon'src={cartIcon} alt='cart'/></Link></li>
                    <li><Link to ='/dashboard'><img className='dashboardIcon' src={dashboardIcon} alt='dashboard'/></Link></li>
                    <li><Link to='/login'><button className='mainNav-ul-li-button'>Login</button></Link></li>
                    <li className='menuIcon'><img onClick={()=>setShowMenu(true)} src={menutIcon} alt='menu'/></li>
                </ul>

            </div>
            <div className={showMenu?`burger-section`:`hideMenu`}>
                <div className='div-x'><img onClick={()=>setShowMenu(false)} src={xIcon} alt='x' /></div>
                <Link to ='/trails'><p>Trails</p></Link>
                <Link to ='/products'><p>Products</p></Link>
                <Link to ='/about'><p>About</p></Link>
                <Link to ='/contact'> <p>Contact</p></Link>
                <div className='burger-icons'>
                <Link to ='/cart'> <img src={cartIcon} alt='cart'/></Link>
                    <Link to ='/dashboard'><img src={dashboardIcon} alt='dashboard'/></Link>
                </div>
                <Link to='/login'> <button className='burgerButton'>Login</button></Link>
            </div>
        </div>
    );
}
export default MainNav;