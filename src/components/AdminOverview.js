import ridesImg from '../images/icons8-cycling-96.png';
import ordersImg from '../images/icons8-maximum-order-64.png';
import requestImg from '../images/icons8-request-64.png';
import reportsImg from '../images/icons8-report-100.png';
import cancel from '../images/icons8-x-50.png';
import approve from '../images/icons8-correct-64.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getCountOrders} from '../actions/totalOrders';
import {getCountReports} from '../actions/totalRports';
import {getCountRides} from '../actions/rides';
import {getCountRequests} from '../actions/totalRequests';
import {getJoinRequestsData ,deleteJoinRequest ,acceptJoinRequest} from '../actions/JoinRequests';
import { useEffect ,useCallback, useState} from 'react';
function AdminOverview() {
    const ordersCount = useSelector((state) => state.totalOrders);
    const reportsCount = useSelector((state) => state.totalReports);
    const requestsCount = useSelector((state) => state.totalRequests);
    const ridesCount = useSelector((state) => state.rides);
    const joinRequests = useSelector((state) => state.joinRequests);
    const dispatch = useDispatch();
    const [request ,setRequest]=useState();
    const [showAccpetPopup , setShowAccpetPopup]=useState(false);
    useEffect(() => {
        dispatch(getCountOrders());
        dispatch(getCountReports());
        dispatch(getCountRides());
        dispatch(getCountRequests());
        dispatch(getJoinRequestsData());
    }, [dispatch]);
      const handleCancel = useCallback((user_id, ride_id,id) => {
        dispatch(deleteJoinRequest(user_id, ride_id,id));
      }, [dispatch]);
      const handleAcceptRequest=()=>{
        dispatch(acceptJoinRequest(request.user_id, request.ride_id,request.id));
        setShowAccpetPopup(false);
      }
    return (
        <>
            <div className='overview-cells'>
                <div className='overview-cell'><img src={ridesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total rides</p>
                    <p className='total-p-d'>{ridesCount}</p></div>
                <div className='overview-cell'><img src={ordersImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total orders</p>
                    <p className='total-p-d'>{ordersCount}</p></div>
                <div className='overview-cell'><img src={requestImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total requests</p>
                    <p className='total-p-d'>{requestsCount}</p></div>
                <div className='overview-cell'><img src={reportsImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total reports</p>
                    <p className='total-p-d'>{reportsCount}</p></div>
            </div>
            <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>User</th>
                    <th className='order-th'>Level</th>
                    <th className='order-th'>Ride</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Distance</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                {
                    joinRequests && joinRequests.map((request,index)=>(
                        <tr key={index}>
                <td className='td-user-d' data-cell="User">{request.user_name}</td>
                <td className='td-user-d' data-cell="Level">{request.user_level}</td>
                <td className='td-user-d' data-cell="ride">{request.ride_title}</td>
                <td className='td-user-d' data-cell="Dificulty">{request.ride_difficulty}</td>
                <td className='td-user-d' data-cell="Distance">{request.ride_distance} km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={approve} onClick={()=>{setShowAccpetPopup(true);setRequest(request)}} alt='approve' className='requestActions'/>
                    <img src={cancel} onClick={()=>handleCancel(request.user_id,request.ride_id,request.id)} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>
                    ))
                }
            </tbody>
        </table>
        {showAccpetPopup && (
        <div className="delete-popup">
          <div className="delete-popup-content">
            <p className='delete-popup-t'>Accept joinin?</p>
            <hr></hr>
            <p className='delete-popup-p'>Confirm joining  <b>{request &&request.user_name }</b></p>

            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowAccpetPopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{handleAcceptRequest()}} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
            </>
    );
}
export default AdminOverview;