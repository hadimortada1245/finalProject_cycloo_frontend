import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import '../styles/about.css';
import img1 from'../images/login2.jpg'
import img2 from'../images/contuct1.jpg'
function About(){
    return(
        <>
            <MainNav/>
            <div className='about-container'>
                    <div className='about-c-content'>
                        <div className='about-c-content-d1'>
                            <div className='about-c-content-d1-text'>
                                <p className='about-c-content-title'>Who are we ?</p>
                                <p className='about-c-content-p'>We're a dynamic cycling community passionate about both mountain and road biking. Beyond being a club, we're a tight-knit family united by the joy of conquering challenging trails and relishing the freedom of smooth roads. Whether you're a seasoned rider or a beginner, our supportive community welcomes all skill levels. Join us for shared adventures, fitness goals, and the pure enjoyment of the ride.</p>
                            </div> 
                            <img  className='about-c-content-img1' src={img1} alt='aboutImg'/>
                        </div>
                        <div className='about-c-content-d2'>
                            <img className='about-c-content-img2' src={img2} alt='aboutImg'/>
                        <div className='about-c-content-d1-text'>
                                <p className='about-c-content-title'>Are you readyy?</p>
                                <p className='about-c-content-p'>At our core, we embody the fusion of passion and pedal power. Conquering peaks on mountain trails and cruising scenic roads, we're a community that celebrates individual achievements and fosters lasting connections. Join our vibrant cycling family – more than a club, we're a community that defines the essence of joy in both mountain and road cycling.</p>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}
export default About;