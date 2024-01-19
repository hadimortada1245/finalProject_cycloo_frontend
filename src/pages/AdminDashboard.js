import '../styles/userDashboard.css';
import '../styles/adminDashboard.css';
import '../styles/popups.css';
import { Link } from 'react-router-dom';
import AdminOverview from '../components/AdminOverview';
import AdminOrders from '../components/AdminOrders';
import AdminUsers from '../components/AdminUsers';
import AdminProducts from '../components/AdminProducts';
import AdminRides from '../components/AdminRides';
import AdminRequests from '../components/AdminRequests';
import AdminReports from '../components/AdminReports';
import xIcon from '../images/icons8-x-48.png';
import { useState } from 'react';
import BurgerMenu from '../images/icons8-menu-50 (1).png';
function UserDashboard() {
    const [section, setSection] = useState("Overview");
    const [activeItem, setActiveItem] = useState(0);
    const [ridesSection, setRidesSection] = useState("Rides");
    const [activeRidesItem, setActiveRidesItem] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    function getTimeCategory() {
        const currentTime = new Date().getHours();
        const morningStart = 6;
        const morningEnd = 11;

        const afternoonStart = 12;
        const afternoonEnd = 17;

        const eveningStart = 18;
        const eveningEnd = 23;

        if (currentTime >= morningStart && currentTime <= morningEnd) {
            return <p className='welcome-p-d'>Good morning</p>;
        } else if (currentTime >= afternoonStart && currentTime <= afternoonEnd) {
            return <p className='welcome-p-d'>Good afternoon</p>;
        } else if (currentTime >= eveningStart && currentTime <= eveningEnd) {
            return <p className='welcome-p-d'>Good evening</p>;
        } else {
            return <p className='welcome-p-d'>Welome to your dashboard</p>
        }
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
                            <li key={3} onClick={() => { setActiveItem(3); setSection("Users") }} className={3 === activeItem ? 'ul-d-li-active-d' : 'ul-d-li'}>Users</li>
                            <li key={4} onClick={() => { setActiveItem(4); setSection("Products") }} className={4 === activeItem ? 'ul-d-li-active-d' : 'ul-d-li'}>Products</li>
                            <li key={5} onClick={() => { setActiveItem(5) }}></li>
                            <li className='ul-d-li-btn'><button className='logOut-d'>Log out</button></li>
                            <li className='burger-li'><img onClick={() => setShowMenu(true)} src={BurgerMenu} alt='burgerIcon' className='burgerIcon-d' /></li>
                        </ul>
                        <div className={showMenu ? `burger-section1` : `hideMenu`}>
                            <div className='div-x'><img onClick={() => setShowMenu(false)} src={xIcon} alt='x' className='div-x-img' /></div>
                            <p className='p-burger'onClick={() => { setShowMenu(false); setSection("Overview") }}>Overview</p>
                            <p className='p-burger' onClick={() => { setShowMenu(false); setSection("Orders") }}>Orders</p>
                            <p className='p-burger' onClick={() => { setShowMenu(false); setSection("Rides") }}>Rides</p>
                            <p className='p-burger' onClick={() => { setShowMenu(false); setSection("Users") }}>Users</p>
                            <p className='p-burger' onClick={() => { setShowMenu(false); setSection("Products") }}>Products</p>
                            <button className='burgerButton1'>Log out</button>
                        </div>
                    </div>
                </div>
                <div className='welcome-content'>
                    <p className='hello-p-d'>Hello Admin</p>
                    {section === "Overview" && getTimeCategory()}
                    {section === "Orders" && <p className='welcome-p-d-a'>Total orders: 23 </p>}
                    {section === "Rides" && <ul className='rides-admin-ul'>
                        <li key={0} onClick={() => { setActiveRidesItem(0); setRidesSection("Rides") }} className={0 === activeRidesItem ? 'active-list-admin' : 'not-active'}>Rides</li>
                        <li key={1} onClick={() => { setActiveRidesItem(1); setRidesSection("Requests") }} className={1 === activeRidesItem ? 'active-list-admin' : 'not-active'} >Requests</li>
                        <li key={2} onClick={() => { setActiveRidesItem(2); setRidesSection("Reports") }} className={2 === activeRidesItem ? 'active-list-admin' : 'not-active'} >Reports</li>
                        </ul>}
                    {section === "Users" && <p className='welcome-p-d-a'>Total users: 23 </p>}
                    {section === "Products" && <p className='welcome-p-d-a'>Total products: 23 </p>}
                </div>
            </div>
            <div className='dash-content'>
                {section === "Overview" && <AdminOverview />}
                {section === "Orders" && <AdminOrders />}
                {section === "Users" && <AdminUsers />}
                {section === "Products" && <AdminProducts />}
                {section === "Rides" && ridesSection === "Rides" &&<AdminRides /> }
                {section === "Rides" && ridesSection === "Requests" &&<AdminRequests /> }
                {section === "Rides" && ridesSection === "Reports" &&<AdminReports /> }

            </div>
        </div>

    );
}
export default UserDashboard;
