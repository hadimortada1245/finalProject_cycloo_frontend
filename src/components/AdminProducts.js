import editIcon from '../images/icons8-write-48.png';
import trashIcon from '../images/icons8-trash-52.png';
import bike1 from '../images/image 3.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllProducts,deleteProduct } from '../actions/products';
import { useEffect, useState } from 'react';
function AdminProducts(){
    const dispatch=useDispatch();
    const products = useSelector((state) => state.products);
    const [product,setProduct]=useState(null);
    const [showDeletePopup,setShowDeletePopup]=useState(false);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    const handleDeleteProduct=()=>{
        dispatch(deleteProduct(product.id));
        setShowDeletePopup(false)
    }
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
                {products && products.map((product,index)=>(
                    <tr key={index}>
                    <td className='td-user-d' data-cell="Item"><img src={bike1} alt='item' className='item-d-a'/></td>
                    <td className='td-user-d' data-cell="Name">{product.name}</td>
                    <td className='td-user-d' data-cell="Type">{product.type}</td>
                    <td className='td-user-d' data-cell="Quantity">{product.quantity}</td>
                    <td className='td-user-d' data-cell="Price">{product.price}</td>
                    <td className='td-user-d' data-cell="actions">
                    <div className="icons-div">
                        <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                        <img src={trashIcon} onClick={()=>{setProduct(product);setShowDeletePopup(true)}} alt='trashIcon' className='detailsIcon'/>
                        </div>
                        </td>
                    </tr> 
                ))}
                 
                
                
            </tbody>
        </table>
        {showDeletePopup && (
        <div className="delete-popup">
          <div className="delete-popup-content">
            <p className='delete-popup-t'>Delete product?</p>
            <hr></hr>
            <p className='delete-popup-p'>Click confirm to delete <b>{product && product.name}</b></p>

            <div className='delete-popup-buttons-div'>
            <button onClick={()=>setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
            <button onClick={()=>{handleDeleteProduct()}} className='delete-popup-confirm-btn'>Confirm</button>
            </div>
            
          </div>
        </div>
      )}
        </div>
    )
}
export default AdminProducts;
