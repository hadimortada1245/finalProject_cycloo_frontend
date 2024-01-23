import cancel from '../images/icons8-x-50.png';
import approve from '../images/icons8-correct-64.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRidesRequestsData ,deleteRideRequest} from '../actions/ridesRequests';
function AdminRequests() {
    const [rideRequest, setRideRequest] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
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
                                        <img src={approve} alt='approve' className='requestActions' />
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
        </>
    )
}
export default AdminRequests;
