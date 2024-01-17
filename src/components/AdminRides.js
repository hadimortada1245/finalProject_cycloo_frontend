import editIcon from '../images/icons8-write-48.png';
import trashIcon from '../images/icons8-trash-52.png';
function AdminRides(){
    return (
        <div className='rides-admin-container'>
            <button>Add</button>
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
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Trail">True</td>
                <td className='td-user-d' data-cell="Participants">10</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>      
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Trail">True</td>
                <td className='td-user-d' data-cell="Participants">10</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>      
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Trail">True</td>
                <td className='td-user-d' data-cell="Participants">10</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>      
            </tbody>
        </table>
        </div>
    )
}
export default AdminRides;
