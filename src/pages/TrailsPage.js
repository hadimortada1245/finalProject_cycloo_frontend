import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import '../styles/trailsPage.css';
import Rides from '../components/Rides';
import Trails from '../components/Trails';
import { useState } from 'react';
function TrailsPage(){
    const [section,setSection]=useState("Trails");
    const [activeItem, setActiveItem] = useState(0);

  const changeBorder = (index) => {
    setActiveItem(index);
  };

  const listItems = ['Trails', 'Rides'];
    return(
        <div className='TrailsPage'>
            <MainNav/>
            <div className='TheBiggest'>
            <div className='list-r-t-container'>
                <p className='discover-p'>Let's Discover together</p>
                <ul>
                {listItems.map((item, index) => (
          <li
            key={index}
            className={index === activeItem ? 'active' : ''}
            onClick={() =>{changeBorder(index);setSection(`${item}`);} }
          >
            {item}
          </li>
        ))}
                </ul>
            </div>
            {section === "Trails" ? <Trails /> : <Rides />}
            </div>
            <Footer/>
        </div>
    );
}
export default TrailsPage;