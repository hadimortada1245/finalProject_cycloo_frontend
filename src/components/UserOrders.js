import '../styles/userOrders.css';
import detailsIcon from '../images/icons8-view-30.png'
function UserOrders(){
    return(
        <>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>No</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Quantity</th>
                    <th className='order-th'>Total</th>
                    <th className='order-th'>Status</th>
                    <th className='order-th'>Delivery</th>
                    <th className='order-th'>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="No">1</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Quantity">1</td>
                <td className='td-user-d' data-cell="Total">150$</td>
                <td className='td-user-d' data-cell="Status">Pending</td>
                <td className='td-user-d' data-cell="Delivery">5$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="No">1</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Quantity">1</td>
                <td className='td-user-d' data-cell="Total">150$</td>
                <td className='td-user-d' data-cell="Status">Pending</td>
                <td className='td-user-d' data-cell="Delivery">5$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="No">1</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Quantity">1</td>
                <td className='td-user-d' data-cell="Total">150$</td>
                <td className='td-user-d' data-cell="Status">Pending</td>
                <td className='td-user-d' data-cell="Delivery">5$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="No">1</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Quantity">1</td>
                <td className='td-user-d' data-cell="Total">150$</td>
                <td className='td-user-d' data-cell="Status">Pending</td>
                <td className='td-user-d' data-cell="Delivery">5$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="No">1</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Quantity">1</td>
                <td className='td-user-d' data-cell="Total">150$</td>
                <td className='td-user-d' data-cell="Status">Pending</td>
                <td className='td-user-d' data-cell="Delivery">5$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
            </tbody>
        </table>
        </>
    );
}
export default UserOrders;