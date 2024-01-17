import editIcon from '../images/icons8-write-48.png';
import trashIcon from '../images/icons8-trash-52.png';
import bike1 from '../images/image 3.png'
function AdminProducts(){
    return (
        <div className='order-admin-container'>
            <button>Add</button>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>Item</th>
                    <th className='order-th'>Name</th>
                    <th className='order-th'>Type</th>
                    <th className='order-th'>Quantity</th>
                    <th className='order-th'>Price</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="Item"><img src={bike1} alt='item' className='item-d-a'/></td>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Type">Bicycle</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Price">240</td>
                <td className='td-user-d' data-cell="actions">
                <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>  
                <tr>
                <td className='td-user-d' data-cell="Item"><img src={bike1} alt='item' className='item-d-a'/></td>
                <td className='td-user-d' data-cell="Name">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Type">Bicycle</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Price">240</td>
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
export default AdminProducts;
