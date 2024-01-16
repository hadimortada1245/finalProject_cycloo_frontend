import '../styles/userDashboard.css';
import {Link} from 'react-router-dom';
import profileImg from '../images/icons8-settings-32.png'
function UserDashboard(){
    return(
     <div className='dash-container'>
        <div className='nav-container'>
            <div className='nav-content-d'>
            <div className='cycloo-d'><Link to ='/'>Cycloo</Link></div>
            <div>
                <ul className='ul-d'>
                    <li className='ul-d-li'>Overview</li>
                    <li className='ul-d-li'>Orders</li>
                    <li className='ul-d-li'>Rides</li>
                    <li className='ul-d-li'>Settings <img className='profileImg' src={profileImg} alt='profile'/></li>
                    <li><button className='logOut-d'>Log out</button></li>
                </ul>
            </div>
            </div>
            <div className='welcome-content'>
          <p className='hello-p-d'>Hello Anna</p>  
          <p className='welcome-p-d'>Good morning</p>  
          </div>
        </div>
     </div>

    );
}
export default UserDashboard;
