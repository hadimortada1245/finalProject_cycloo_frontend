import trashIcon from '../images/icons8-trash-52.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllReports ,deleteReport} from '../actions/reports';
import { useEffect, useState } from 'react';
function AdminReports(){
    const reports = useSelector((state) => state.reports);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllReports());
    }, [dispatch])
    const [showDeletePopup,setShowDeletePopup]=useState(false);
    const [report,setReport]=useState(null);
    const handleDeleteReport=()=>{
        if(report){
            dispatch(deleteReport(report.user_id,report.ride_id,report.id));
            setShowDeletePopup(false)
        }
    }
    return (
        <>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>User</th>
                    <th className='order-th'>Ride</th>
                    <th className='order-th'>Title</th>
                    <th className='order-th'>Reason</th>   
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                {reports && reports.map((report,index)=>(
                    <tr key={index}>
                    <td className='td-user-d' data-cell="User">{report.user_name}</td>
                    <td className='td-user-d' data-cell="Ride">{report.location}</td>
                    <td className='td-user-d' data-cell="Title">{report.report_title}</td>
                    <td className='td-user-d' data-cell="Reason">{report.reason} </td>
                    <td className='td-user-d' data-cell="actions">
                        <img src={trashIcon} alt='trashIcon' className='detailsIcon' onClick={()=>{setShowDeletePopup(true);setReport(report)}}/>
                        </td>
                    </tr>  
                ))}
                                              
            </tbody>
        </table>
        {showDeletePopup && (
        <div className="delete-popup">
          <div className="delete-popup-content">
            <p className='delete-popup-t'>Delete report?</p>
            <hr></hr>
            <p className='delete-popup-p'>Click confirm to delete this report</p>

            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{handleDeleteReport()}} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
        </>
    )
}
export default AdminReports;
