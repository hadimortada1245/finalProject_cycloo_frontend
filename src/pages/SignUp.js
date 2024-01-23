import { Link ,useNavigate } from 'react-router-dom';
import '../styles/signUp.css';
import bikeIcon from '../images/icons8-bike-100.png';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registre } from '../actions/user';
function SignUp(){
    const navigate=useNavigate();
    const [error,setError]=useState(null)
    const emailRef=useRef(null);
    const nameRef=useRef(null);
    const phoneRef=useRef(null);
    const addressRef=useRef(null);
    const passwordRef=useRef(null)
    const confirmPassRef=useRef(null);
    const dispatch =useDispatch();
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const isPasswordValid = (password) => {
        const passwordRegex = /^.{8,}$/;
        return passwordRegex.test(password);
      };
      const handleRegistre = async (e) => {
        e.preventDefault();
        setError(null);
        if (!isEmailValid(emailRef.current.value)) {
          setError('Invalid email address');
          return;
        }
        if (!isPasswordValid(passwordRef.current.value)) {
          setError('Invalid password. Password must be at least 8 characters.');
          return;
        }
        if (passwordRef.current.value !== confirmPassRef.current.value) {
          setError('Passwords do not match');
          return;
        }
        if(!phoneRef.current.value || !nameRef.current.value || !addressRef.current.value || !emailRef.current.value || !passwordRef.current.value || !confirmPassRef.current.value){setError("All fields must be filled!");return;}
        try {
          const response = await dispatch(registre(nameRef.current.value, emailRef.current.value,phoneRef.current.value,addressRef.current.value, passwordRef.current.value));
          const { id, level, role, token } = response;
          localStorage.setItem('id', id);
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('level', level);
          navigate('/');
        } catch (error) {
          setError(error.response.data.message);
        }
      };
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
                    {error && <span className='error-span-registre'>{error}</span>}
                        {!error && <span className='notErrorSpan'>error span</span>}
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Name</label>
                              <input type='text' placeholder='Enter your name' ref={nameRef} required/>
                          </div>
                          <div className='input-div'>
                              <label>Email</label>
                              <input type='text' placeholder='Enter your email' ref={emailRef} required/>
                          </div>
                        </div>
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Phone</label>
                              <input type='text' placeholder='Enter your phone' ref={phoneRef} required/>
                          </div>
                          <div className='input-div'>
                              <label>Address</label>
                              <input type='text' placeholder='Enter your address' ref={addressRef} required/>
                          </div>
                        </div>
                        <div className='form-row-div'>
                          <div className='input-div'>
                              <label>Password</label>
                              <input type='password' placeholder='Enter your password' ref={passwordRef} required/>
                          </div>
                          <div className='input-div'>
                              <label>Confirm Password</label>
                              <input type='password' placeholder='Cofirm your password' ref={confirmPassRef} required/>
                          </div>
                        </div>
                        <div className='btn-signUp-container'>
                            <button onClick={(e)=>handleRegistre(e)}>Register</button>
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
