import React, { useState ,useEffect,useRef } from 'react';
import '../styles/trailsPage.css';
import participantsIcon from '../images/icons8-person-30.png';
import threePoints from '../images/icons8-more-30.png';
import {getAllRides_h,getAllRidesForRideSectionWithUser} from '../actions/rides';
import {addJoin ,deleteJoinRequest} from '../actions/JoinRequests';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addReport} from '../actions/reports';
const validDate = (d) => {
    const dateObject = new Date(d);
    if (isNaN(dateObject.getTime())) {
        return "";
    }
    return dateObject.toISOString().split('T')[0];
};

function Rides() {
    const [showDeletePopup,setShowDeletePopup]=useState(false);
    const [showReportPopup,setShowReportPopup]=useState(false)
    const [addError,setAddError]=useState(false)
    const [ride,setRide]=useState(null);
    const navigate=useNavigate();
    const level=localStorage.getItem('level');
    const id=localStorage.getItem('id');
    console.log(level,id);
    const dispatch=useDispatch();
    const rides = useSelector((state) => state.rides);
    const [showInputs, setShowInputs] = useState(Array(rides.length).fill(false));
    const titleRef=useRef(null);
    const descriptionRef=useRef(null);
    const toggleInputs = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const hideButtons = (index) => {
        setShowInputs((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };
    useEffect(() => {
        if(id)
        dispatch(getAllRidesForRideSectionWithUser(id));
    else dispatch(getAllRides_h())
    }, [dispatch, id]);
    const canJoin = (difficulty) => {
        if ((level === "beginner" && (difficulty === "Hard" || difficulty === "Intermediate")) ||
          (level === "Intermediate" && difficulty === "Hard")) {
          return false;
        }
        return true;
      };
      const removeJoining=()=>{
        dispatch(deleteJoinRequest(id,ride.id));
        toast.success('You are not joined now', {
            position: "top-center",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        setTimeout(()=>{
            setShowDeletePopup(false)
        },[2000])
      }
      const handleJoin = (ride) => {
        if (!id) {
          navigate('/login');
        } else {
            if(ride.user_joined===1){
                setRide(ride);
                setShowDeletePopup(true);
                return;
            }
          if (!canJoin(ride.difficuly)) {
            toast.warn('You cannot join this ride due to difficulty level try to request', {
                position: "top-center",
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            return; 
          }
          dispatch(addJoin(id,ride.id,1))
          console.log(ride);
        }
      };
      const requestJoin=(ride)=>{
        if (!id) {
            navigate('/login');
          }
        if(ride.user_joined===1 || canJoin(ride.difficuly))return;
        const n=0;
        dispatch(addJoin(id,ride.id,n));
      }
      const addRideReport=()=>{
        if (!id) {
            navigate('/login');
          }
        setAddError(false)
        if(!titleRef.current.value || !descriptionRef.current.value){setAddError(true);return;}
        dispatch(addReport(id,ride.id,titleRef.current.value,descriptionRef.current.value));
        setShowReportPopup(false)
      }
    return (
        <div className='TrailsPage'>
            <div className='rides-container'>
                {rides && rides.map((ride, index) => (
                    <div className='ride' key={index}>
                        <img
                            src={threePoints}
                            alt='three-points'
                            className='three-points'
                            onClick={() => toggleInputs(index)}
                        />
                        <div className='ride-f'>
                            <div className='ride-f-t'>
                                <p className='ride-title'>{ride.title}</p>
                                <p className='ride-p'>{ride.description}</p>
                            </div>
                            <div className='ride-f-imgs'>
                                <div className={showInputs[index] ? 'more-inputs-show' : 'more-inputs'}>
                                    <button className='more-inputs-btn'  onClick={() =>{hideButtons(index);requestJoin(ride)}}>
                                        Request
                                    </button>
                                    <button className='more-inputs-btn' onClick={() => {hideButtons(index);setRide(ride);setShowReportPopup(true)}}>
                                        Report
                                    </button>
                                </div>
                                <img className='mapImg' src={ride.mapImg} alt='map' />
                                <img className='imgRide' src={ride.img} alt='ride' />
                            </div>
                        </div>
                        <div className='ride-s'>
                            <div className='rideData'>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Distance</p>
                                    <p className='rideData-p'>{ride.distance} Km</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Date</p>
                                    <p className='rideData-p'>{ride && validDate(ride.date)}</p>
                                </div>
                                <div className='rideData-g rideData-g3'>
                                    <p className='rideData-title'>Time</p>
                                    <p className='rideData-p'>{ride.time} AM</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Location</p>
                                    <p className='rideData-p'>{ride.location}</p>
                                </div>
                                <div className='rideData-g'>
                                    <p className='rideData-title'>Difficulty</p>
                                    <p className='rideData-p'>{ride.difficuly}</p>
                                </div>
                                <div className='rideData-g1'>
                                    <p className='rideData-title'>Cost</p>
                                    <p className='rideData-p'>{ride.cost!==0?ride.cost+" $":'Free'}</p>
                                </div>
                            </div>
                            <div className='participants-div'>
                                <p className='participants-number'>{ride.participants_count}</p>{' '}
                                <img className='participantsIcon' src={participantsIcon} alt='participantsIcon' />
                                <button className='view-all-rides' onClick={()=>{handleJoin(ride);}}>{ride.user_joined === 1 ? "Joined" : "Join us"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showDeletePopup && (
        <div className="delete-popup">
          <div className="delete-popup-content">
            <p className='delete-popup-t'>Remove joining?</p>
            <hr></hr>
            <p className='delete-popup-p'>Click confirm to unjoin this ride</p>

            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{removeJoining()}} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
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
        </div>
    );
}

export default Rides;
