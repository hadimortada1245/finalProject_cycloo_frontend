
import '../styles/trailsPage.css';
import map from '../images/WhatsApp Image 2023-12-27 at 13.15.37.jpeg'
import threePoints from '../images/icons8-more-30.png';
import emptyLike from '../images/icons8-like-48 (1).png';
import filledLike from '../images/icons8-like-48 (2).png';
import { useState } from 'react';
function Trails() {
    const [showInputs,setShowInputs]=useState(false);
    return (
        <div className='TrailsPage'>
            <div className='trails-container'>
                <div className='trail'>
                    <div><img className='trail-map'  src={map} alt='map' /> </div>
                    <div className='trail-content-text'>
                    <div className={showInputs? `more-info-btn`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                        <div className='trail-content-head'>
                            <p className='trail-name'>Quaroun</p>
                            <img className='more-details-trail' onClick={()=>setShowInputs(!showInputs)} src={threePoints} alt='threePoints' />
                        </div>
                        <p className='trail-description'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!
                        </p>
                        <div className='trail-data-div'>
                            <div className='rideData'>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Distance</p>
                                    <p className='rideData-p'>51.03 km</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Elevation</p>
                                    <p className='rideData-p'>1312 m</p>
                                </div>
                                <div className='rideData-g rideData-g3'>
                                    <p className='rideData-title'>Direction</p>
                                    <p className='rideData-p'>Mixed</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Difficulty</p>
                                    <p className='rideData-p'>Easy</p>
                                </div>
                                <div className='rideData-g1'>
                                    <p className='rideData-title'>Duration</p>
                                    <p className='rideData-p'>2h 48m</p>
                                </div>
                                <div className='participantsLikes'>
                                    <p className='n-likes'>10</p> <img src={filledLike} alt='likeIcon' className='likeIcon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trail'>
                    <div><img className='trail-map'  src={map} alt='map' /> </div>
                    <div className='trail-content-text'>
                    <div className={showInputs? `more-info-btn`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                        <div className='trail-content-head'>
                            <p className='trail-name'>Quaroun</p>
                            <img className='more-details-trail' onClick={()=>setShowInputs(!showInputs)} src={threePoints} alt='threePoints' />
                        </div>
                        <p className='trail-description'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!
                        </p>
                        <div className='trail-data-div'>
                            <div className='rideData'>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Distance</p>
                                    <p className='rideData-p'>51.03 km</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Elevation </p>
                                    <p className='rideData-p'>1312 m</p>
                                </div>
                                <div className='rideData-g rideData-g3'>
                                    <p className='rideData-title'>Direction</p>
                                    <p className='rideData-p'>Mixed</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Difficulty</p>
                                    <p className='rideData-p'>Easy</p>
                                </div>
                                <div className='rideData-g1'>
                                    <p className='rideData-title'>Duration</p>
                                    <p className='rideData-p'>2h 48m</p>
                                </div>
                                <div className='participantsLikes'>
                                    <p className='n-likes'>10</p> <img src={emptyLike} alt='likeIcon' className='likeIcon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trail'>
                    <div><img className='trail-map'  src={map} alt='map' /> </div>
                    <div className='trail-content-text'>
                    <div className={showInputs? `more-info-btn`:`more-inputs`}>
                                <button className='more-inputs-btn'>Request</button>
                                <button className='more-inputs-btn'>Report</button>
                            </div>
                        <div className='trail-content-head'>
                            <p className='trail-name'>Quaroun</p>
                            <img className='more-details-trail' onClick={()=>setShowInputs(!showInputs)} src={threePoints} alt='threePoints' />
                        </div>
                        <p className='trail-description'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!
                        </p>
                        <div className='trail-data-div'>
                            <div className='rideData'>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Distance</p>
                                    <p className='rideData-p'>51.03 km</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Elevation </p>
                                    <p className='rideData-p'>1312 m</p>
                                </div>
                                <div className='rideData-g rideData-g3'>
                                    <p className='rideData-title'>Direction</p>
                                    <p className='rideData-p'>Mixed</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Difficulty</p>
                                    <p className='rideData-p'>Easy</p>
                                </div>
                                <div className='rideData-g1'>
                                    <p className='rideData-title'>Duration</p>
                                    <p className='rideData-p'>2h 48m</p>
                                </div>
                                <div className='participantsLikes'>
                                    <p className='n-likes'>10</p> <img src={emptyLike} alt='likeIcon' className='likeIcon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Trails;