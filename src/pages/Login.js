
import { Link } from 'react-router-dom';
import '../styles/login.css';
import bikeIcon from '../images/icons8-bike-100.png'
function Login(){
    return(
        <div className='login'>
            <div className='login-container'>
                <div className='login-form'>
                    <p className='login-title'>Log in</p>
                    <div className='input-container'>
                    <label>Email</label>
                    <input type='text' placeholder='Your email' required/>
                    </div>
                    <div className='input-container'>
                    <label>Password</label>
                    <input type='password' placeholder='Your password'required/>
                    </div>
                    <button>Log in</button>
                    <p className='login-p'>Don’t have an account?</p>
                  <Link to='/signup'>  <p className='login-s'>Sign up</p></Link>
                </div>
                <div className='login-text'>
                    <p className='login-text-title'> welcome back</p>
                    <p className='login-text-t'>Pedal into a world of adventure! Secure your ride with us and unlock the thrill of cycling bliss.</p>
                </div>
            </div>
            <div className='login-bike-container'>
                <img src={bikeIcon} className='login-bikeIcon' alt='bikeIcon'/>
            </div>
        </div>
    );
}
export default Login;