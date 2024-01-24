import React, { useState,useEffect,useRef } from 'react';
import '../styles/trailsPage.css';
import threePoints from '../images/icons8-more-30.png';
import emptyLike from '../images/icons8-like-48 (1).png';
import filledLike from '../images/icons8-like-48 (2).png';
import { useDispatch ,useSelector} from 'react-redux';
import {getAllRidesForTrailsSectionWithUser,getAllRides_u,addLike,deleteLike} from '../actions/rides';
import { useNavigate } from 'react-router-dom';
import {addReport} from '../actions/reports';
import {addRideRequest} from '../actions/ridesRequests';
// const trailsData = [
//     {
//         name: 'Quaroun',
//         description:
//             'Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!',
//         distance: '51.03 km',
//         elevation: '1312 m',
//         direction: 'Mixed',
//         difficulty: 'Easy',
//         duration: '2h 48m',
//         participants: 10,
//     },
// ];

function Trails() {
    const [doFetch,setDoFetch]=useState(false);
    const [showReportPopup,setShowReportPopup]=useState(false);
    const [showRequestPopup,setShowRequestPopup]=useState(false);
    const [addError,setAddError]=useState(false);
    const [trail,setTrail]=useState(null);
    const [difficulty,setdifficulty]=useState('easy');
    const titleRef=useRef(null);
    const descriptionRef=useRef(null);
    const titlRef=useRef(null);
    const descripRef=useRef(null);
    const locationRef=useRef(null);
    const timeRef=useRef(null);
    const dateRef=useRef(null);
    const distanceRef=useRef(null);
    const navigate=useNavigate();
    const id=localStorage.getItem('id');
    const dispatch=useDispatch();
    const rides = useSelector((state) => state.rides);
    const toggleInputs = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    const addRideReport=()=>{
        if (!id) {
            navigate('/login');
          }
        setAddError(false)
        if(!titleRef.current.value || !descriptionRef.current.value){setAddError(true);return;}
        dispatch(addReport(id,trail.id,titleRef.current.value,descriptionRef.current.value));
        setShowReportPopup(false)
      }
    const closeButtons = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };
    const handleLike=(ride_id)=>{
        if(!id)navigate('/login')
        dispatch(addLike(id,ride_id));
        setTimeout(()=>{
            setDoFetch(!doFetch);
        },[1000])
}
const removeLike=(ride_id)=>{
    if(!id)navigate('/login')
    dispatch(deleteLike(id,ride_id));
setTimeout(()=>{
    setDoFetch(!doFetch);
},[1000])
}
useEffect(() => {
    if(id)
    dispatch(getAllRidesForTrailsSectionWithUser(id));
else dispatch(getAllRides_u())
}, [dispatch, id ,doFetch]);

const [showInputs, setShowInputs] = useState(Array(rides.length).fill(false));
const handleAddRequest=()=>{
    if(!titlRef.current.value  || !locationRef.current.value  || !distanceRef.current.value  || !dateRef.current.value  || !timeRef.current.value  || !difficulty  || !descripRef.current.value){setAddError(true);return;}
   dispatch(addRideRequest(id,titlRef.current.value,locationRef.current.value,distanceRef.current.value,dateRef.current.value,timeRef.current.value,difficulty,descripRef.current.value));
   setTimeout(()=>{
    setShowRequestPopup(false);
   },[1000]);
}
return (
    <div className='TrailsPage'>
            <div className='trails-container'>
                {rides.map((trail, index) => (
                    <div className='trail' key={index}>
                        <div>
                            <img className='trail-map' src={trail.mapImg} alt='map' />
                        </div>
                        <div className='trail-content-text'>
                            <div className={showInputs[index] ? 'more-info-btn' : 'more-inputs'}>
                                <button className='more-inputs-btn' onClick={() => {closeButtons(index);setdifficulty(trail.difficuly);setShowRequestPopup(true);setTrail(trail)}}>
                                    Request
                                </button>
                                <button className='more-inputs-btn' onClick={() =>{ closeButtons(index);setTrail(trail);setShowReportPopup(true)}}>
                                    Report
                                </button>
                            </div>
                            <div className='trail-content-head'>
                                <p className='trail-name'>{trail.title}</p>
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
                                        <p className='rideData-p'>{trail.distance} km</p>
                                    </div>
                                    <div className='rideData-g'>
                                        <p className='rideData-title'>Elevation </p>
                                        <p className='rideData-p'>{trail.elevation} m</p>
                                    </div>
                                    <div className='rideData-g rideData-g3'>
                                        <p className='rideData-title'>Direction</p>
                                        <p className='rideData-p'>{trail.direction}</p>
                                    </div>
                                    <div className='rideData-g'>
                                        <p className='rideData-title'>Difficulty</p>
                                        <p className='rideData-p'>{trail.difficuly}</p>
                                    </div>
                                    <div className='rideData-g1'>
                                        <p className='rideData-title'>Duration</p>
                                        <p className='rideData-p'>{trail.duration}</p>
                                    </div>
                                    <div className='participantsLikes'>
                                        <p className='n-likes'>{trail.like_count}</p>{' '}
                                        {!trail.liked?<img src={emptyLike} alt='likeIcon' className='likeIcon' onClick={()=>handleLike(trail.id,index)} />
                                        :<img src={filledLike} alt='likeIcon' className='likeIcon' onClick={()=>removeLike(trail.id)}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showReportPopup&& (
        <div className="delete-popup">
          <div className="report-popup-content">
            <div className='report-div-p'>
                <p className='report-titles'>Title:</p>
                <input type="text" className='report-input' name='title' ref={titleRef}/>
             </div>   
            <div className='report-div-p'>
                <p className='report-titles'>Description:</p>
                <textarea className='report-textarea' ref={descriptionRef}>
                </textarea>
             </div>  
             {addError && <span className='error-span-popup'>All fields must be filled</span>}
            {!addError && <span className='notErrorSpan'>error span</span>} 
            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowReportPopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{addRideReport()}} className='delete-popup-confirm-btn' >Submit</button>
            </div>
            
          </div>
        </div>
      )}
                  {showRequestPopup && (
                <div className='add-product-popup'>
                    <div className='add-product-popup-content'>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Title</p>
                                <input type='text' className='add-product-input' defaultValue={trail && trail.title} ref={titlRef} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Location</p>
                                <input type='text' className='add-product-input' defaultValue={trail && trail.location} ref={locationRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Date</p>
                                <input type="date" className='add-product-input' defaultValue={trail && validDate( trail.date)} ref={dateRef} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Time</p>
                                <input type="time" className='add-product-input' defaultValue={trail && trail.time} ref={timeRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Distance</p>
                                <input type='number' className='add-product-input' defaultValue={trail && trail.distance} ref={distanceRef} />
                            </div>
                        </div>

                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-textArea-container'>
                                <p className='add-product-p'>Description</p>
                                <textarea className='add-product-textArea' ref={descripRef} defaultValue={trail && trail.description}>
                                </textarea>
                            </div>
                        </div>
                        <div className='add-product-popup-content-radios'>
                        <label>
        <input
            type="radio"
            name="difficulty"
            value="Hard"
            onFocus={(e) => setdifficulty(e.target.value)}
            defaultChecked={trail && trail.difficuly === "Hard"}
        />
        Hard
    </label>

    <label>
        <input
            type="radio"
            name="difficulty"
            value="Intermediate"
            onFocus={(e) => setdifficulty(e.target.value)}
            defaultChecked={trail && trail.difficuly === "Intermediate"}
        />
        Intermediate
    </label>

    <label>
        <input
            type="radio"
            name="difficulty"
            value="Easy"
            onFocus={(e) => setdifficulty(e.target.value)}
            defaultChecked={trail && trail.difficuly === "Easy"}
        />
        Easy
    </label>
                        </div>
                        <hr></hr>
                        {addError && <span className='error-span-popup'>All fields must be filled</span>}
                        {!addError && <span className='notErrorSpan'>error span</span>}
                        <div className='add-product-popup-content-btns'>
                            <button className='add-product-cancel-btn' onClick={() => setShowRequestPopup(false)}>Cancel</button>
                            <button className='add-product-submit-btn' onClick={() => handleAddRequest()}>Submit</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default Trails;
