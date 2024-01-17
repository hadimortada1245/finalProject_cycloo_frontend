import cancel from '../images/icons8-x-50.png';
import approve from '../images/icons8-correct-64.png';
function AdminRequests(){
    return (
        <div className='rides-admin-container'>
            <button>Add</button>
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
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>      
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>      
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>      
                <tr>
                <td className='td-user-d' data-cell="Name">Quaroun</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Jezzine</td>
                <td className='td-user-d' data-cell="User">hadi.mortada@gmail.com</td>
                <td className='td-user-d' data-cell="Distance">24 km</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>      
                      
            </tbody>
        </table>
        </div>
    )
}
export default AdminRequests;
