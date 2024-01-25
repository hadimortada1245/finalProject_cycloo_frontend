import '../styles/userOrders.css';
import {getOrdersByUserId} from '../actions/orders';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
function UserOrders(){
    const dispatch=useDispatch();
    const id =localStorage.getItem('id');
    const orders = useSelector((state) => state.orders);
    useEffect(()=>{
        dispatch(getOrdersByUserId(id))
    },[dispatch,id]);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
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
            
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map((order,index)=>(

                <tr key={index}>
                <td className='td-user-d' data-cell="No">{order.id}</td>
                <td className='td-user-d' data-cell="Date">{validDate(order.createdAt)}</td>
                <td className='td-user-d' data-cell="Quantity">{order.quantity}</td>
                <td className='td-user-d' data-cell="Total">{order.total}$</td>
                <td className='td-user-d' data-cell="Status">{order.status===0?'Pending':"Completed"}</td>
                <td className='td-user-d' data-cell="Delivery">{order.delivery}$</td>
                
                </tr>
                    ))
                }
                
            </tbody>
        </table>
        </>
    );
}
export default UserOrders;