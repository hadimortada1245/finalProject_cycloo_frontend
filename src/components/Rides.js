
import '../styles/trailsPage.css';
import map from '../images/WhatsApp Image 2023-12-27 at 13.15.37.jpeg'
import rideImg from '../images/bicycle (1).jpg'
import participantsIcon from '../images/icons8-person-30.png'
import threePoints from '../images/icons8-more-30.png';
import { useState } from 'react';
function Rides(){
    const [showInputs,setShowInputs]=useState(false);
    return(
        <div className='TrailsPage'>
                <div className='rides-container'>
                <div className='ride'>
                    <img src={threePoints} alt='three-points' className='three-points' onClick={()=>setShowInputs(!showInputs)}/>
                    <div className='ride-f'>
                        <div className='ride-f-t'>
                            <p className='ride-title'>Quaroun</p>
                            <p className='ride-p'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                        </div>
                        <div className='ride-f-imgs'>
                            <div className={showInputs? `more-inputs-show`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                            <img className='mapImg' src={map} alt='map' />
                            <img className='imgRide' src={rideImg} alt='ride' />
                        </div>
                    </div>
                    <div className='ride-s'>
                        <div className='rideData'>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Distance</p>
                                <p className='rideData-p'>51.03 km</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Date</p>
                                <p className='rideData-p'>13/1/2024</p>
                            </div>
                            <div className='rideData-g rideData-g3'>
                                <p className='rideData-title'>Time</p>
                                <p className='rideData-p'>7:00 am</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Location</p>
                                <p className='rideData-p'>Jezzine</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Difficulty</p>
                                <p className='rideData-p'>Easy</p>
                            </div>
                            <div className='rideData-g1'>
                                <p className='rideData-title'>Cost</p>
                                <p className='rideData-p'>Free</p>
                            </div>
                        </div>
                        <div className='participants-div'>
                           <p className='participants-number'>10</p> <img className='participantsIcon' src={participantsIcon} alt='participantsIcon'/>
                            <button className='view-all-rides'>Join us</button>
                        </div>
                    </div>

                </div>
                <div className='ride'>
                    <img src={threePoints} alt='three-points' className='three-points' onClick={()=>setShowInputs(!showInputs)}/>
                    <div className='ride-f'>
                        <div className='ride-f-t'>
                            <p className='ride-title'>Quaroun</p>
                            <p className='ride-p'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                        </div>
                        <div className='ride-f-imgs'>
                            <div className={showInputs? `more-inputs-show`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                            <img className='mapImg' src={map} alt='map' />
                            <img className='imgRide' src={rideImg} alt='ride' />
                        </div>
                    </div>
                    <div className='ride-s'>
                        <div className='rideData'>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Distance</p>
                                <p className='rideData-p'>51.03 km</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Date</p>
                                <p className='rideData-p'>13/1/2024</p>
                            </div>
                            <div className='rideData-g rideData-g3'>
                                <p className='rideData-title'>Time</p>
                                <p className='rideData-p'>7:00 am</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Location</p>
                                <p className='rideData-p'>Jezzine</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Difficulty</p>
                                <p className='rideData-p'>Easy</p>
                            </div>
                            <div className='rideData-g1'>
                                <p className='rideData-title'>Cost</p>
                                <p className='rideData-p'>Free</p>
                            </div>
                        </div>
                        <div className='participants-div'>
                           <p className='participants-number'>10</p> <img className='participantsIcon' src={participantsIcon} alt='participantsIcon'/>
                            <button className='view-all-rides'>Join us</button>
                        </div>
                    </div>

                </div>
                <div className='ride'>
                    <img src={threePoints} alt='three-points' className='three-points' onClick={()=>setShowInputs(!showInputs)}/>
                    <div className='ride-f'>
                        <div className='ride-f-t'>
                            <p className='ride-title'>Quaroun</p>
                            <p className='ride-p'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                        </div>
                        <div className='ride-f-imgs'>
                            <div className={showInputs? `more-inputs-show`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                            <img className='mapImg' src={map} alt='map' />
                            <img className='imgRide' src={rideImg} alt='ride' />
                        </div>
                    </div>
                    <div className='ride-s'>
                        <div className='rideData'>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Distance</p>
                                <p className='rideData-p'>51.03 km</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Date</p>
                                <p className='rideData-p'>13/1/2024</p>
                            </div>
                            <div className='rideData-g rideData-g3'>
                                <p className='rideData-title'>Time</p>
                                <p className='rideData-p'>7:00 am</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Location</p>
                                <p className='rideData-p'>Jezzine</p>
                            </div>
                            <div className='rideData-g'>
                                <p className='rideData-title'>Difficulty</p>
                                <p className='rideData-p'>Easy</p>
                            </div>
                            <div className='rideData-g1'>
                                <p className='rideData-title'>Cost</p>
                                <p className='rideData-p'>Free</p>
                            </div>
                        </div>
                        <div className='participants-div'>
                           <p className='participants-number'>10</p> <img className='participantsIcon' src={participantsIcon} alt='participantsIcon'/>
                            <button className='view-all-rides'>Join us</button>
                        </div>
                    </div> 

               </div>
                </div>
        </div>
    );
}
export default Rides;