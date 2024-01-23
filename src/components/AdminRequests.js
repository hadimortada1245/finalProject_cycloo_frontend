import cancel from '../images/icons8-x-50.png';
import approve from '../images/icons8-correct-64.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState ,useRef} from 'react';
import { getRidesRequestsData ,deleteRideRequest} from '../actions/ridesRequests';
import { addRide } from '../actions/rides';
function AdminRequests() {
    const [rideRequest, setRideRequest] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedImgMap, setSelectedImgMap] = useState(null);
    const [difficulty, setdifficulty] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showAddRidePopup, setShowAddRidePopup] = useState(false);
    const [addError, setAddError] = useState(false);
    const titleRef=useRef(null); 
    const locationRef=useRef(null);
    const distanceRef=useRef(null); 
    const costRef=useRef(null);
    const dateRef=useRef(null);
    const timeRef=useRef(null);
    const descripionRef=useRef(null);
    const ridesRequests = useSelector((state) => state.ridesRequests);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRidesRequestsData());
    }, [dispatch])
    console.log(ridesRequests);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    const handleCancelRequest = () => {
        dispatch(deleteRideRequest(rideRequest.id))
        setShowDeletePopup(false);
    }
    const handleAddRide = () => {
        if (!titleRef.current.value || !locationRef.current.value || !distanceRef.current.value || !costRef.current.value || !dateRef.current.value || !timeRef.current.value || !descripionRef.current.value || !difficulty || !selectedImg || !selectedImgMap) {
            setAddError("all fields must be filled !");
            return;
        }
        dispatch(addRide(titleRef.current.value, locationRef.current.value, distanceRef.current.value, costRef.current.value, dateRef.current.value, timeRef.current.value, descripionRef.current.value, difficulty, selectedImg, selectedImgMap));
        setTimeout(() => {
            setShowAddRidePopup(false);
            setSelectedImg(null);
            setSelectedImgMap(null);
        }, 2800);
    }
    return (
        <>
            <table className='order-table1'>
                <thead>
                    <tr>
                        <th className='order-th'>Name</th>
                        <th className='order-th'>Date</th>
                        <th className='order-th'>Location</th>
                        <th className='order-th'>User</th>
                        <th className='order-th'>Distance</th>
                        <th className='order-th'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ridesRequests && ridesRequests.map((rideRequest, index) => (
                            <tr key={index}>
                                <td className='td-user-d' data-cell="Name">{rideRequest.title}</td>
                                <td className='td-user-d' data-cell="Date">{rideRequest && validDate(rideRequest.date)}</td>
                                <td className='td-user-d' data-cell="Location">{rideRequest.location}</td>
                                <td className='td-user-d' data-cell="User">{rideRequest.user_email}</td>
                                <td className='td-user-d' data-cell="Distance">{rideRequest.distance} km</td>
                                <td className='td-user-d' data-cell="actions">
                                    <div className="icons-div">
                                        <img src={approve} onClick={()=>{setShowAddRidePopup(true);setRideRequest(rideRequest);setdifficulty(rideRequest.difficuly)}} alt='approve' className='requestActions' />
                                        <img src={cancel} onClick={() => { setRideRequest(rideRequest); setShowDeletePopup(true) }} alt='cancel' className='requestActions' />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {showDeletePopup && (
                <div className="delete-popup">
                    <div className="delete-popup-content">
                        <p className='delete-popup-t'>Reject request?</p>
                        <hr></hr>
                        <p className='delete-popup-p'>Confirm rejecting this requests</p>

                        <div className='delete-popup-buttons-div'>
                            <button onClick={() => setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
                            <button onClick={() => { handleCancelRequest() }} className='delete-popup-confirm-btn'>Confirm</button>
                        </div>

                    </div>
                </div>
            )}
            {showAddRidePopup && (
                <div className='add-product-popup'>
                    <div className='add-product-popup-content'>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Title</p>
                                <input type='text' className='add-product-input' defaultValue={rideRequest && rideRequest.title} ref={titleRef} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Location</p>
                                <input type='text' className='add-product-input' defaultValue={rideRequest && rideRequest.location} ref={locationRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Distance</p>
                                <input type='number' className='add-product-input' defaultValue={rideRequest && rideRequest.distance} ref={distanceRef} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Cost</p>
                                <input type="number" className='add-product-input' ref={costRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Date</p>
                                <input type="date" className='add-product-input' defaultValue={rideRequest && validDate(rideRequest.date)} ref={dateRef}/>
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Time</p>
                                <input type="time" className='add-product-input' defaultValue={rideRequest && rideRequest.time} ref={timeRef}/>
                            </div>
                        </div>

                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-textArea-container'>
                                <p className='add-product-p'>Description</p>
                                <textarea className='add-product-textArea' ref={descripionRef} defaultValue={rideRequest && rideRequest.description} >
                                </textarea>
                            </div>
                        </div>
                        <div className='add-product-popup-content-radios'>
                            <label>
                                <input type="radio" name="difficulty" defaultChecked={rideRequest && rideRequest.difficuly==="Hard"} value="Hard" onFocus={(e) => setdifficulty(e.target.value)} />
                                Hard
                            </label>

                            <label>
                                <input type="radio" name="difficulty" defaultChecked={rideRequest && rideRequest.difficuly==="Intermediate"} value="Intermediate" onFocus={(e) => setdifficulty(e.target.value)} />
                                Intermediate
                            </label>

                            <label>
                                <input type="radio" name="difficulty" defaultChecked={rideRequest && rideRequest.difficuly==="Easy"}  value="Easy" onFocus={(e) => setdifficulty(e.target.value)} />
                                Easy
                            </label>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i-f'>
                                <div className='choose-product-img-div'>
                                    <input id='fileInput1' type='file' accept='image/*' className='add-product-input' onChange={(e) => setSelectedImg(e.target.files[0])} />
                                    <label className='file-label' htmlFor='fileInput1'>
                                        Choose image
                                    </label>
                                    {selectedImg && <span className='error-span-popup'>{selectedImg.name}</span>}
                                    {!selectedImg && <span className='error-span-popup'>No file chosen</span>}
                                </div>
                                <div className='choose-product-img-div'>
                                    <input id='fileInput2' type='file' accept='image/*' className='add-product-input' onChange={(e) => { setSelectedImgMap(e.target.files[0]); }} />
                                    <label className='file-label' htmlFor='fileInput2'>
                                        Choose map
                                    </label>
                                    {selectedImgMap && <span className='error-span-popup'>{selectedImgMap.name}</span>}
                                    {!selectedImgMap && <span className='error-span-popup'>No file chosen</span>}

                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        {addError && <span className='error-span-popup'>All fields must be filled</span>}
                        {!addError && <span className='notErrorSpan'>error span</span>}
                        <div className='add-product-popup-content-btns'>
                            <button className='add-product-cancel-btn' onClick={() => setShowAddRidePopup(false)}>Cancel</button>
                            <button className='add-product-submit-btn' onClick={() => handleAddRide()}>Submit</button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
export default AdminRequests;
