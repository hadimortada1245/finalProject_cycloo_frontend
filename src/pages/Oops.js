import '../styles/oops.css';
import bikeIcon from '../images/icons8-bike-100.png';
function Oops(){
    return(
        <div className='oops-container'>
            <div className='oops-content'>
                <p className='oops-word'>Oops</p>
                <img className='oops-img' src={bikeIcon} alt='bike'/>
                <p className='p-404'><span className='span-404'>404</span> Not found</p>
                <button className='oops-btn'>Back to home</button>
            </div>
        </div>
    );
}
export default Oops;