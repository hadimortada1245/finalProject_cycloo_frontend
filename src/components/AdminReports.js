import trashIcon from '../images/icons8-trash-52.png';
import detailsIcon from '../images/icons8-view-30.png'
function AdminReports(){
    return (
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>RideId</th>
                    <th className='order-th'>User</th>
                    <th className='order-th'>Location</th>
                    <th className='order-th'>Title</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="RideId">2</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="Title">Lack of signage</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>                                 
                <tr>
                <td className='td-user-d' data-cell="RideId">2</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="Title">Lack of signage</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>                                 
                <tr>
                <td className='td-user-d' data-cell="RideId">2</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="Title">Lack of signage</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>                                 
                <tr>
                <td className='td-user-d' data-cell="RideId">2</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="Title">Lack of signage</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>                                 
            </tbody>
        </table>
    )
}
export default AdminReports;
