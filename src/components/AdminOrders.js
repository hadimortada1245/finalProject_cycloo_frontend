import viewIcon from '../images/icons8-view-30.png'
function AdminOrders(){
    return (
        <>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>Id</th>
                    <th className='order-th'>User</th>
                    <th className='order-th'>Quantity</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Total</th>
                    <th className='order-th'>Status</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="Id">1</td>
                <td className='td-user-d' data-cell="User">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="total">160$</td>
                <td className='td-user-d' data-cell="status">completed</td>
                <td className='td-user-d' data-cell="actions">
                    <img src={viewIcon} alt='editIcon' className='detailsIcon'/>
                    </td>
                </tr>  
                <tr>
                <td className='td-user-d' data-cell="Id">1</td>
                <td className='td-user-d' data-cell="User">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="total">160$</td>
                <td className='td-user-d' data-cell="status">completed</td>
                <td className='td-user-d' data-cell="actions">
                    <img src={viewIcon} alt='editIcon' className='detailsIcon'/>
                    </td>
                </tr>  
                <tr>
                <td className='td-user-d' data-cell="Id">1</td>
                <td className='td-user-d' data-cell="User">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="total">160$</td>
                <td className='td-user-d' data-cell="status">completed</td>
                <td className='td-user-d' data-cell="actions">
                    <img src={viewIcon} alt='editIcon' className='detailsIcon'/>
                    </td>
                </tr>  
                <tr>
                <td className='td-user-d' data-cell="Id">1</td>
                <td className='td-user-d' data-cell="User">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="total">160$</td>
                <td className='td-user-d' data-cell="status">completed</td>
                <td className='td-user-d' data-cell="actions">
                    <img src={viewIcon} alt='editIcon' className='detailsIcon'/>
                    </td>
                </tr>  
                <tr>
                <td className='td-user-d' data-cell="Id">1</td>
                <td className='td-user-d' data-cell="User">Hadi Mortada</td>
                <td className='td-user-d' data-cell="Quantity">2</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="total">160$</td>
                <td className='td-user-d' data-cell="status">completed</td>
                <td className='td-user-d' data-cell="actions">
                    <img src={viewIcon} alt='editIcon' className='detailsIcon'/>
                    </td>
                </tr>  
            </tbody>
        </table>
        </>
    )
}
export default AdminOrders;