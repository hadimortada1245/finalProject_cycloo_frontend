import editIcon from '../images/icons8-write-48.png';
import trashIcon from '../images/icons8-trash-52.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllRides_d, deleteRide, addRide ,updateRide ,updateRideStatus} from '../actions/rides';
import { useEffect, useState, useRef } from 'react';
function AdminRides() {
    const [ride, setRide] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showAddRidePopup, setShowAddRidePopup] = useState(false);
    const [title, setTitle] = useState(null);
    const [location, setLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [cost, setCost] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [descripion, setDescription] = useState(null);
    const [difficuly, setdifficulty] = useState("Easy");
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedImgMap, setSelectedImgMap] = useState(null);
    const [addError, setAddError] = useState(false);
    const [showUpdateRidePopup, setShowUpdateRidePopup] = useState(false);
    const titleRef = useRef(null);
    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const costRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const descriptionRef = useRef(null);
    const elevationRef = useRef(null);
    const durationRef = useRef(null);
    const directionRef = useRef(null);
    const rides = useSelector((state) => state.rides);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRides_d());
    }, [dispatch])
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };

    const handleDeleteRide = () => {
        if (ride) {
            dispatch(deleteRide(ride.id));
            setShowDeletePopup(false);
        }
    }
    const handleAddRide = () => {
        if (!title || !location || !distance || !cost || !date || !time || !descripion || !difficuly || !selectedImg || !selectedImgMap) {
            setAddError("all fields must be filled !");
            return;
        }
        dispatch(addRide(title, location, distance, cost, date, time, descripion, difficuly, selectedImg, selectedImgMap));
        setTimeout(() => {
            setShowAddRidePopup(false);
            setSelectedImg(null);
            setSelectedImgMap(null);
        }, 2800);
    }
    const handleUpdateRide = () => {
        dispatch(updateRide(ride.id,titleRef.current.value,locationRef.current.value,distanceRef.current.value,costRef.current.value,dateRef.current.value,timeRef.current.value,descriptionRef.current.value,difficuly,selectedImg,selectedImgMap,elevationRef.current.value,durationRef.current.value,directionRef.current.value));
        setTimeout(() => {
            setShowUpdateRidePopup(false);
            setSelectedImg(null);
            setSelectedImgMap(null);
        }, 2800);
    }
    const handleUpdateRideStatus=(ride)=>{
        if(!ride.duration || !ride.direction || ride.elevation===0){
            setRide(ride);
            setShowUpdateRidePopup(true);
            return;
        }
        dispatch(updateRideStatus(ride.id));
    }
    return (
        <div className='rides-admin-container'>
            <button onClick={() => setShowAddRidePopup(true)}>Add</button>
            <table className='order-table1'>
                <thead>
                    <tr>
                        <th className='order-th'>Name</th>
                        <th className='order-th'>Date</th>
                        <th className='order-th'>Trail</th>
                        <th className='order-th'>Participants</th>
                        <th className='order-th'>Distance</th>
                        <th className='order-th'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rides && rides.map((ride, index) => (
                        <tr key={index}>
                            <td className='td-user-d' data-cell="Name">{ride && ride.title}</td>
                            <td className='td-user-d' data-cell="Date">{ride && validDate(ride.date)}</td>
                            <td className='td-user-d' style={{ cursor: 'pointer' }} data-cell="Trail" onClick={()=>{handleUpdateRideStatus(ride)}}>{ride && ride.status === 0 ? 'False' : 'True'}</td>
                            <td className='td-user-d' data-cell="Participants">{(ride && ride.participants_count) || '0'}</td>
                            <td className='td-user-d' data-cell="Distance">{ride && ride.distance} km</td>
                            <td className='td-user-d' data-cell="actions">
                                <div className="icons-div">
                                    <img src={editIcon} alt='editIcon' className='detailsIcon' onClick={() => { setShowUpdateRidePopup(true); setRide(ride); setSelectedImg(ride.img);setSelectedImgMap(ride.mapImg);setdifficulty(ride.difficuly) }} />
                                    <img src={trashIcon} alt='trashIcon' className='detailsIcon' onClick={() => { setRide(ride); setShowDeletePopup(true) }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showDeletePopup && (
                <div className="delete-popup">
                    <div className="delete-popup-content">
                        <p className='delete-popup-t'>Delete ride?</p>
                        <hr></hr>
                        <p className='delete-popup-p'>Click confirm to delete <b>{ride && ride.title}</b></p>

                        <div className='delete-popup-buttons-div'>
                            <button onClick={() => setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
                            <button onClick={() => { handleDeleteRide() }} className='delete-popup-confirm-btn'>Confirm</button>
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
                                <input type='text' className='add-product-input' onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Location</p>
                                <input type='text' className='add-product-input' onChange={(e) => setLocation(e.target.value)} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Distance</p>
                                <input type='number' className='add-product-input' onChange={(e) => setDistance(e.target.value)} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Cost</p>
                                <input type="number" className='add-product-input' onChange={(e) => setCost(e.target.value)} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Date</p>
                                <input type="date" className='add-product-input' onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className='add-product-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Time</p>
                                <input type="time" className='add-product-input' onChange={(e) => setTime(e.target.value)} />
                            </div>
                        </div>

                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-textArea-container'>
                                <p className='add-product-p'>Description</p>
                                <textarea className='add-product-textArea' onChange={(e) => setDescription(e.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className='add-product-popup-content-radios'>
                            <label>
                                <input type="radio" name="difficulty" value="Hard" onFocus={(e) => setdifficulty(e.target.value)} />
                                Hard
                            </label>

                            <label>
                                <input type="radio" name="difficulty" value="Intermediate" onFocus={(e) => setdifficulty(e.target.value)} />
                                Intermediate
                            </label>

                            <label>
                                <input type="radio" name="difficulty" defaultChecked value="Easy" onFocus={(e) => setdifficulty(e.target.value)} />
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
            {showUpdateRidePopup && (
                <div className='add-product-popup'>
                    <div className='update-ride-popup-content'>
                        <div className='add-product-popup-content-inputs'>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Title</p>
                                <input type='text' className='add-product-input' defaultValue={ride && ride.title} ref={titleRef} />
                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Location</p>
                                <input type='text' className='add-product-input' defaultValue={ride && ride.location} ref={locationRef} />
                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Distance</p>
                                <input type='text' className='add-product-input' defaultValue={ride && ride.distance} ref={distanceRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Cost</p>
                                <input type="number" className='add-product-input' defaultValue={ride && ride.cost} ref={costRef} />
                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Date</p>
                                <input
                                    type="date"
                                    className='add-product-input'
                                    ref={dateRef}
                                    defaultValue={ride && validDate(ride.date) ? validDate(ride.date) : ""}
                                />

                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Time</p>
                                <input type="time" className='add-product-input' defaultValue={ride && ride.time} ref={timeRef} />
                            </div>
                        </div>
                        <div className='add-product-popup-content-inputs'>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Elevation</p>
                                <input type='number' className='add-product-input' ref={elevationRef} defaultValue={ride && ride.elevation} />
                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Duration</p>
                                <input type='text' className='add-product-input' ref={durationRef} defaultValue={ride && ride.duration} />
                            </div>
                            <div className='update-ride-popup-content-inputs-l-i'>
                                <p className='add-product-p'>Direction</p>
                                <input type='text' className='add-product-input' ref={directionRef} defaultValue={ride && ride.direction} />
                            </div>
                        </div>

                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-textArea-container'>
                                <p className='add-product-p'>Description</p>
                                <textarea className='update-ride-textArea' ref={descriptionRef} defaultValue={ride && ride.description}>
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
            defaultChecked={ride && ride.difficuly === "Hard"}
        />
        Hard
    </label>

    <label>
        <input
            type="radio"
            name="difficulty"
            value="Intermediate"
            onFocus={(e) => setdifficulty(e.target.value)}
            defaultChecked={ride && ride.difficuly === "Intermediate"}
        />
        Intermediate
    </label>

    <label>
        <input
            type="radio"
            name="difficulty"
            value="Easy"
            onFocus={(e) => setdifficulty(e.target.value)}
            defaultChecked={ride && ride.difficuly === "Easy"}
        />
        Easy
    </label>
</div>

                        <div className='add-product-popup-content-inputs'>
                            <div className='add-product-popup-content-inputs-l-i-f'>
                                <div className='choose-product-img-div'>
                                    <img className='update-product-img' src={ride && ride.img} alt='current' />
                                    <input id='fileInput1' type='file' accept='image/*' className='add-product-input' onChange={(e) => setSelectedImg(e.target.files[0])} />
                                    <label className='file-label' htmlFor='fileInput1'>
                                        Choose image
                                    </label>
                                </div>
                                <div className='choose-product-img-div'>
                                    <img className='update-product-img' src={ride && ride.mapImg} alt='current' />
                                    <input id='fileInput2' type='file' accept='image/*' className='add-product-input' onChange={(e) => { setSelectedImgMap(e.target.files[0]); }} />
                                    <label className='file-label' htmlFor='fileInput2'>
                                        Choose map
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        {addError && <span className='error-span-popup'>All fields must be filled</span>}
                        {!addError && <span className='notErrorSpan'>error span</span>}
                        <div className='add-product-popup-content-btns'>
                            <button className='add-product-cancel-btn' onClick={() => setShowUpdateRidePopup(false)}>Cancel</button>
                            <button className='add-product-submit-btn' onClick={() => handleUpdateRide()}>Save</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default AdminRides;
