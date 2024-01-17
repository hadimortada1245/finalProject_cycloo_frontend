import editIcon from '../images/icons8-write-48.png'
import trashIcon from '../images/icons8-trash-52.png'
function AdminUsers(){
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
                <tr>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Email">hadi.mortada@isae.edu.lb</td>
                <td className='td-user-d' data-cell="Phone">71039078</td>
                <td className='td-user-d' data-cell="Level">Pro</td>
                <td className='td-user-d' data-cell="Rides">71</td>
                <td className='td-user-d' data-cell="Orders">12</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Email">hadi.mortada@isae.edu.lb</td>
                <td className='td-user-d' data-cell="Phone">71039078</td>
                <td className='td-user-d' data-cell="Level">Pro</td>
                <td className='td-user-d' data-cell="Rides">71</td>
                <td className='td-user-d' data-cell="Orders">12</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Email">hadi.mortada@isae.edu.lb</td>
                <td className='td-user-d' data-cell="Phone">71039078</td>
                <td className='td-user-d' data-cell="Level">Pro</td>
                <td className='td-user-d' data-cell="Rides">71</td>
                <td className='td-user-d' data-cell="Orders">12</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Email">hadi.mortada@isae.edu.lb</td>
                <td className='td-user-d' data-cell="Phone">71039078</td>
                <td className='td-user-d' data-cell="Level">Pro</td>
                <td className='td-user-d' data-cell="Rides">71</td>
                <td className='td-user-d' data-cell="Orders">12</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Email">hadi.mortada@isae.edu.lb</td>
                <td className='td-user-d' data-cell="Phone">71039078</td>
                <td className='td-user-d' data-cell="Level">Pro</td>
                <td className='td-user-d' data-cell="Rides">71</td>
                <td className='td-user-d' data-cell="Orders">12</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                
                
            </tbody>
        </table>
        </>
    )
}
export default AdminUsers;