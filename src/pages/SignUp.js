// import { Link } from 'react-router-dom';
import '../styles/signUp.css';
import bikeIcon from '../images/icons8-bike-100.png'
function SignUp(){
    return(
        <div className='signUp'>
            <div className='signUp-container'>
                <div className='signUp-text-content'>
                    <p className='signUp-text-content-title'>welcome to cycloo</p>
                    <p className='signUp-text-content-p'>
Join our cycling community! Register now for thrilling rides, new routes, and a vibrant community. Be part of the adventure!</p>
                </div>
                <div className='inputs-container'>
                    <p className='signUp-title'>Sign up</p>
                    <form>
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Name</label>
                              <input type='text' placeholder='Enter your name' required/>
                          </div>
                          <div className='input-div'>
                              <label>Email</label>
                              <input type='text' placeholder='Enter your email' required/>
                          </div>
                        </div>
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Phone</label>
                              <input type='text' placeholder='Enter your phone' required/>
                          </div>
                          <div className='input-div'>
                              <label>Address</label>
                              <input type='text' placeholder='Enter your address' required/>
                          </div>
                        </div>
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Password</label>
                              <input type='text' placeholder='Enter your password' required/>
                          </div>
                          <div className='input-div'>
                              <label>Confirm Password</label>
                              <input type='text' placeholder='Cofirm your password' required/>
                          </div>
                        </div>
                        <div className='btn-signUp-container'>
                            <button>Register</button>
                            <p className='sign-p'>Already have an account?</p>
                           <Link to='/login'> <p className='login-s'>Login</p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='sign-bike-container'>
                <img src={bikeIcon} className='sign-bikeIcon' alt='bikeIcon'/>
            </div>
        </div>
    );
}
export default SignUp;
