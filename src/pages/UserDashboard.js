import '../styles/userDashboard.css';
import { Link ,useNavigate} from 'react-router-dom';
import UserOverview from '../components/UserOverview';
import UserOrders from '../components/UserOrders';
import UserRides from '../components/UserRides';
import xIcon from '../images/icons8-x-48.png';
import { useState } from 'react';
import BurgerMenu from '../images/icons8-menu-50 (1).png';
function UserDashboard() {
    const navigate=useNavigate();
    const handleLogoutAction = () => {
        localStorage.clear();
        navigate('/');
        
    }
    const [section, setSection] = useState("Overview");
    const [activeItem, setActiveItem] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    function getTimeCategory() {
        const currentTime = new Date().getHours();
        const morningStart = 6;
        const morningEnd = 11;
        const afternoonStart = 12;
        const afternoonEnd = 17;
        const eveningStart = 18;
        const eveningEnd = 23;
        if (currentTime >= morningStart && currentTime <= morningEnd) 
            return <p className='welcome-p-d'>Good morning</p>;
         else if (currentTime >= afternoonStart && currentTime <= afternoonEnd) 
            return <p className='welcome-p-d'>Good afternoon</p>;
         else if (currentTime >= eveningStart && currentTime <= eveningEnd) 
            return <p className='welcome-p-d'>Good evening</p>;
         else 
            <p className='welcome-p-d'>Welome to your dashboard</p>
        
    }
    return (
        <div className='dash-container'>
            <div className='nav-container'>
                <div className='nav-content-d'>
                    <div className='cycloo-d'><Link to='/'>Cycloo</Link></div>
                    <div>
                        <ul className='ul-d'>
                            <li key={0} onClick={() => { setActiveItem(0); setSection("Overview") }} className={0 === activeItem ? 'ul-d-li-active-d' : 'ul-d-li'}>Overview</li>
                            <li key={1} onClick={() => { setActiveItem(1); setSection("Orders") }} className={1 === activeItem ? 'ul-d-li-active-d' : 'ul-d-li'}>Orders</li>
                            <li key={2} onClick={() => { setActiveItem(2); setSection("Rides") }} className={2 === activeItem ? 'ul-d-li-active-d' : 'ul-d-li'}>Rides</li>
                            <li key={3} onClick={() => { setActiveItem(3) }} className='ul-d-li'>Settings</li>
                            <li className='ul-d-li-btn'><button className='logOut-d' onClick={()=>handleLogoutAction()}>Log out</button></li>
                            <li className='burger-li'><img onClick={() => setShowMenu(true)} src={BurgerMenu} alt='burgerIcon' className='burgerIcon-d' /></li>
                        </ul>
                        <div className={showMenu ? `burger-section2` : `hideMenu`}>
                            <div className='div-x'><img onClick={() => setShowMenu(false)} src={xIcon} alt='x' /></div>
                            <p className='p-burger2'onClick={() => { setShowMenu(false); setSection("Overview") }}>Overview</p>
                            <p className='p-burger2' onClick={() => { setShowMenu(false); setSection("Orders") }}>Orders</p>
                            <p className='p-burger2' onClick={() => { setShowMenu(false); setSection("Rides") }}>Rides</p>
                            <button className='burgerButton2' onClick={()=>handleLogoutAction()}>Log out</button>
                        </div>
                    </div>
                </div>
                <div className='welcome-content'>
                    <p className='hello-p-d'>Hello Anna</p>
                    {section === "Overview" && getTimeCategory()}
                    {section === "Orders" && <p className='welcome-p-d'>Your orders</p>}
                    {section === "Rides" && <p className='welcome-p-d'>Rides you joined </p>}
                </div>
            </div>
            <div className='dash-content'>
                {section === "Overview" && <UserOverview />}
                {section === "Orders" && <UserOrders />}
                {section === "Rides" && <UserRides />}

            </div>
        </div>

    );
}
export default UserDashboard;
