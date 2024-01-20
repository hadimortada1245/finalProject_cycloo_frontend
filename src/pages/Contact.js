import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import '../styles/contact.css';
import { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
function Contact(){
    const form = useRef();
    const [error,setError]=useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');
    if (!userName || !userEmail || !message) {
        setError('Please fill in all fields');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        setError('Please enter a valid email address');
        return;
    }
        emailjs.sendForm('service_l9whsg7', 'template_ac975a9', form.current, 'IhNna7eaQ3PnOGCYp')
          .then((result) => {
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <>
            <MainNav/>
            <div className='contact-container'>
            <div className='contact-form'>
                <p className='contact-title'>get in touch</p>
                {error&&<span className='error-span'>{error}</span>}
                {!error&&<span className='error-span'></span>}
                <form ref={form} onSubmit={sendEmail}>
                <div className='input-control'>
                    <input type='text' name="user_name" autoComplete='off' required/>
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>U</span>
                        <span style={{ transitionDelay: "50ms" }}>s</span>
                        <span style={{ transitionDelay: "100ms" }}>e</span>
                        <span style={{ transitionDelay: "150ms" }}>r</span>
                        <span style={{ transitionDelay: "200ms" }}>n</span>
                        <span style={{ transitionDelay: "250ms" }}>a</span>
                        <span style={{ transitionDelay: "300ms" }}>m</span>
                        <span style={{ transitionDelay: "350ms" }}>e</span>
                    </label>
                </div>
                <div className='input-control'>
                    <input type='text' name="user_email" autoComplete='off' required/>
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>E</span>
                        <span style={{ transitionDelay: "50ms" }}>m</span>
                        <span style={{ transitionDelay: "100ms" }}>a</span>
                        <span style={{ transitionDelay: "150ms" }}>i</span>
                        <span style={{ transitionDelay: "200ms" }}>l</span>
                       
                    </label>
                </div>
                <div className='input-control'>
                    <input type='text' name="message" autoComplete='off' required/>
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>M</span>
                        <span style={{ transitionDelay: "50ms" }}>e</span>
                        <span style={{ transitionDelay: "100ms" }}>s</span>
                        <span style={{ transitionDelay: "150ms" }}>s</span>
                        <span style={{ transitionDelay: "200ms" }}>a</span>
                        <span style={{ transitionDelay: "250ms" }}>g</span>
                        <span style={{ transitionDelay: "300ms" }}>e</span>
                    </label>
                </div>
                <button className='contuct-submit'>Submit</button>
                </form>
            </div>
            </div>
            <Footer/>
        </>
    );
}
export default Contact;