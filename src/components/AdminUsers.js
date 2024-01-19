import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../actions/user';
import { useEffect, useState } from 'react';
import trashIcon from '../images/icons8-trash-52.png'
function AdminUsers() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])
    const [showDeletePopup , setShowDeletePopup]=useState(false);
    return (
        <>
            <table className='order-table1'>
                <thead>
                    <tr>
                        <th className='order-th'>Name</th>
                        <th className='order-th'>Email</th>
                        <th className='order-th'>Phone</th>
                        <th className='order-th'>Level</th>
                        <th className='order-th'>Rides</th>
                        <th className='order-th'>Orders</th>
                        <th className='order-th'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index) => (
                            <tr key={index}>
                                <td className='td-user-d' data-cell="Name">{user.name}</td>
                                <td className='td-user-d' data-cell="Email">{user.email}</td>
                                <td className='td-user-d' data-cell="Phone">{user.phone}</td>
                                <td className='td-user-d' data-cell="Level">{user.level}</td>
                                <td className='td-user-d' data-cell="Rides">{user.order_count}</td>
                                <td className='td-user-d' data-cell="Orders">{user.ride_count}</td>
                                <td className='td-user-d' data-cell="Actions">
                                    <div className="icons-div">
                                        <img src={trashIcon} onClick={()=>{setShowDeletePopup(true)}} alt='trashIcon' className='detailsIcon' />
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
            <p className='delete-popup-t'>Delete user?</p>
            <hr></hr>
            <p className='delete-popup-p'>Click confirm to delete <b>Hadi</b></p>
            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>setShowDeletePopup(true)} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
        </>
    )
}
export default AdminUsers;