import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import '../styles/contact.css';

function Contact(){
    return(
        <>
            <MainNav/>
            <div className='contact-container'>
            <div className='contact-form'>
                <p className='contact-title'>get in touch</p>
                <form>
                <div className='input-control'>
                    <input type='text' required/>
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
                    <input type='text' required/>
                    <label>
                        <span style={{ transitionDelay: "0ms" }}>E</span>
                        <span style={{ transitionDelay: "50ms" }}>m</span>
                        <span style={{ transitionDelay: "100ms" }}>a</span>
                        <span style={{ transitionDelay: "150ms" }}>i</span>
                        <span style={{ transitionDelay: "200ms" }}>l</span>
                       
                    </label>
                </div>
                <div className='input-control'>
                    <input type='text' required/>
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