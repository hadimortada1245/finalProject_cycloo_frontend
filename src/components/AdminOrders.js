
import {getOrders,updateOrders} from '../actions/orders';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
function AdminOrders(){
    const [doFetch,setDoFetch]=useState(false);
    const dispatch=useDispatch();
    const orders = useSelector((state) => state.orders);
    useEffect(()=>{
        dispatch(getOrders())
    },[dispatch,doFetch]);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    const handleUpdate=(Id)=>{
        dispatch(updateOrders(Id));
        setDoFetch(!doFetch)
    }
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
                      
                </tr>
            </thead>
            <tbody>
                {orders && orders.map((order,index)=>(
                <tr key={index}>
                <td className='td-user-d' data-cell="Id">{order.id}</td>
                <td className='td-user-d' data-cell="User">{order.user_name}</td>
                <td className='td-user-d' data-cell="Quantity">{order.quantity}</td>
                <td className='td-user-d' data-cell="Date">{validDate(order.createdAt)}</td>
                <td className='td-user-d' data-cell="total">{order.total}$</td>
                <td className='td-user-d' data-cell="status" style={{ cursor: 'pointer' }} onClick={()=>handleUpdate(order.id)}>{order.status===0?'Pending':'Completed'}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default AdminOrders;