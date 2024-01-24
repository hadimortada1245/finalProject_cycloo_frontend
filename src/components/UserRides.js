
import trashIcon from '../images/icons8-trash-52.png'
import {getUserRides} from '../actions/rides';
import {getRidesRequestsByUserId,deleteRideRequest} from '../actions/ridesRequests';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
function UserRides(){
    const id=localStorage.getItem('id');
    const rides = useSelector((state) => state.rides);
    const ridesRequests = useSelector((state) => state.ridesRequests);
    const [showDeletePopup,setShowDeletePopup]=useState(false);
    const [request,setRequest]=useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserRides(id));
        dispatch(getRidesRequestsByUserId(id));
    }, [dispatch,id]);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    const handleDeleteRequest=()=>{
        dispatch(deleteRideRequest(request.id));
        setTimeout(()=>{
            setShowDeletePopup(false)
        },[100])
    }   
    return (
        <>
        <table className='order-table'>
            <thead>
                <tr>
                    <th className='order-th'>Name</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Memeber</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Distance</th>
                    <th className='order-th'>Cost</th>
                    
                </tr>
            </thead>
            <tbody>
                {rides && rides.map((ride,index)=>(
                    <tr key={index}>
                <td className='td-user-d' data-cell="Name">{ride.title}</td>
                <td className='td-user-d' data-cell="Date">{validDate(ride.date)}</td>
                <td className='td-user-d' data-cell="Memeber">{ride.joined_people_count}</td>
                <td className='td-user-d' data-cell="Dificulty">{ride.difficuly}</td>
                <td className='td-user-d' data-cell="Distance">{ride.distance} km</td>
                <td className='td-user-d' data-cell="Cost">{ride.cost===0?"Free":ride.cost+" $"}</td>
                </tr>
                ))
                }
                
            </tbody>
        </table>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>Name</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Location</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Distance</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                {
                    ridesRequests && ridesRequests.map((rideRequest,index)=>(
                <tr key={index}>
                <td className='td-user-d' data-cell="Name">{rideRequest.title}</td>
                <td className='td-user-d' data-cell="Date">{validDate(rideRequest.date)}</td>
                <td className='td-user-d' data-cell="Location">{rideRequest.location}</td>
                <td className='td-user-d' data-cell="Dificulty">{rideRequest.difficuly}</td>
                <td className='td-user-d' data-cell="Distance">{rideRequest.distance} km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={trashIcon} alt='trashIcon' onClick={()=>{setShowDeletePopup(true);setRequest(rideRequest)}} className='detailsIcon'/>
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
            <p className='delete-popup-t'>Delete request?</p>
            <hr></hr>
            <p className='delete-popup-p'>Click confirm to delete this request</p>

            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{handleDeleteRequest()}} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
        </>
    )
}
export default UserRides;