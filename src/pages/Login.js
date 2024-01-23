
import { Link ,useNavigate} from 'react-router-dom';
import '../styles/login.css';
import { useRef, useState } from 'react';
import bikeIcon from '../images/icons8-bike-100.png';
import { useDispatch } from 'react-redux';
import { login } from '../actions/user';
function Login(){
    const navigate=useNavigate();
    const [error,setError]=useState(null)
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const dispatch =useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        if(!emailRef.current.value || !passwordRef.current.value){setError("All fields must be filled!");return;}
        try {
          const response = await dispatch(login(emailRef.current.value, passwordRef.current.value));
          const {id,level,role,token}=response;
          localStorage.setItem('id',id);
          localStorage.setItem('token',token);
          localStorage.setItem('role',role);
          localStorage.setItem('level',level);
          navigate('/');
        } catch (error) {
          setError(error.response.data.message);
        }
      };
      
    return(
        <div className='login'>
            <div className='login-container'>
                <form className='login-form'>
                    <p className='login-title'>Log in</p>
                    {error && <span className='error-span-login'>{error}</span>}
                        {!error && <span className='notErrorSpan'>error span</span>}
                    <div className='input-container'>
                    <label>Email</label>
                    <input type='text' placeholder='Your email' autoComplete='off' required ref={emailRef}/>
                    </div>
                    <div className='input-container'>
                    <label>Password</label>
                    <input type='password' placeholder='Your password' autoComplete='off' required ref={passwordRef}/>
                    </div>
                    <button onClick={(e)=>{handleLogin(e)}}>Log in</button>
                    <p className='login-p'>Don’t have an account?</p>
                  <Link to='/signup'>  <p className='login-s'>Sign up</p></Link>
                </form>
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