import React, { useState } from 'react';
import '../styles/trailsPage.css';
import map from '../images/WhatsApp Image 2023-12-27 at 13.15.37.jpeg';
import threePoints from '../images/icons8-more-30.png';
import emptyLike from '../images/icons8-like-48 (1).png';

const trailsData = [
    {
        name: 'Quaroun',
        description:
            'Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!',
        distance: '51.03 km',
        elevation: '1312 m',
        direction: 'Mixed',
        difficulty: 'Easy',
        duration: '2h 48m',
        participants: 10,
    },
    {
        name: 'Quaroun',
        description:
            'Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!',
        distance: '51.03 km',
        elevation: '1312 m',
        direction: 'Mixed',
        difficulty: 'Easy',
        duration: '2h 48m',
        participants: 10,
    },
    {
        name: 'Quaroun',
        description:
            'Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!',
        distance: '51.03 km',
        elevation: '1312 m',
        direction: 'Mixed',
        difficulty: 'Easy',
        duration: '2h 48m',
        participants: 10,
    },
];

function Trails() {
    const [showInputs, setShowInputs] = useState(Array(trailsData.length).fill(false));

    const toggleInputs = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const closeButtons = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };

    return (
        <div className='TrailsPage'>
            <div className='trails-container'>
                {trailsData.map((trail, index) => (
                    <div className='trail' key={index}>
                        <div>
                            <img className='trail-map' src={map} alt='map' />
                        </div>
                        <div className='trail-content-text'>
                            <div className={showInputs[index] ? 'more-info-btn' : 'more-inputs'}>
                                <button className='more-inputs-btn' onClick={() => closeButtons(index)}>
                                    Request
                                </button>
                                <button className='more-inputs-btn' onClick={() => closeButtons(index)}>
                                    Report
                                </button>
                            </div>
                            <div className='trail-content-head'>
                                <p className='trail-name'>{trail.name}</p>
                                <img
                                    className='more-details-trail'
                                    onClick={() => toggleInputs(index)}
                                    src={threePoints}
                                    alt='threePoints'
                                />
                            </div>
                            <p className='trail-description'>{trail.description}</p>
                            <div className='trail-data-div'>
                                <div className='rideData'>
                                    <div className='rideData-g'>
                                        <p className='rideData-title'>Distance</p>
                                        <p className='rideData-p'>{trail.distance}</p>
                                    </div>
                                    <div className='rideData-g'>
                                        <p className='rideData-title'>Elevation </p>
                                        <p className='rideData-p'>{trail.elevation}</p>
                                    </div>
                                    <div className='rideData-g rideData-g3'>
                                        <p className='rideData-title'>Direction</p>
                                        <p className='rideData-p'>{trail.direction}</p>
                                    </div>
                                    <div className='rideData-g'>
                                        <p className='rideData-title'>Difficulty</p>
                                        <p className='rideData-p'>{trail.difficulty}</p>
                                    </div>
                                    <div className='rideData-g1'>
                                        <p className='rideData-title'>Duration</p>
                                        <p className='rideData-p'>{trail.duration}</p>
                                    </div>
                                    <div className='participantsLikes'>
                                        <p className='n-likes'>{trail.participants}</p>{' '}
                                        <img src={emptyLike} alt='likeIcon' className='likeIcon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trails;
