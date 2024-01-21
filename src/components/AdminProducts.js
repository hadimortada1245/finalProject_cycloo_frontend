import editIcon from '../images/icons8-write-48.png';
import trashIcon from '../images/icons8-trash-52.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllProducts, deleteProduct ,addProduct} from '../actions/products';
import { useEffect, useState } from 'react';
function AdminProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [product, setProduct] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showAddProductPopup, setShowAddProductPopup] = useState(false);
    const [addProductError ,setAddProductError]=useState(false);
    const [productName,setProductName]=useState(null);
    const [productCompany,setProductCompany]=useState(null);
    const [productType,setProductType]=useState(null);
    const [productPrice,setProductPrice]=useState(null);
    const [productQuantity,setProductQuantity]=useState(null);
    const [productDelivery,setProductDelivery]=useState(null);
    const [productDescription,setProductDescription]=useState(null);
    const [selectedImage,setSelectedImage]=useState(null);
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id));
        setShowDeletePopup(false)
    }

    const handleAddProduct=()=>{
        setAddProductError(false);
        if(!selectedImage || !productName || !productCompany || !productType || !productPrice || !productQuantity || !productDelivery || !productDescription){
            setAddProductError(true);
            return;
        }
        dispatch(addProduct(selectedImage ,productName ,productCompany ,productType ,productPrice ,productQuantity ,productDelivery ,productDescription))
        setSelectedImage(null);
     setTimeout(() => {
            setShowAddProductPopup(false); 
          }, 3000);
        setShowAddProductPopup(false);
    }
    return (
        <div className='order-admin-container'>
            <button onClick={()=>setShowAddProductPopup(true)}>Add</button>
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
                    {products && products.map((product, index) => (
                        <tr key={index}>
                            <td className='td-user-d' data-cell="Item"><img src={product.img} alt='item' className='item-d-a' /></td>
                            <td className='td-user-d' data-cell="Name">{product.name}</td>
                            <td className='td-user-d' data-cell="Type">{product.type}</td>
                            <td className='td-user-d' data-cell="Quantity">{product.quantity}</td>
                            <td className='td-user-d' data-cell="Price">{product.price}</td>
                            <td className='td-user-d' data-cell="actions">
                                <div className="icons-div">
                                    <img src={editIcon} alt='editIcon' className='detailsIcon' />
                                    <img src={trashIcon} onClick={() => { setProduct(product); setShowDeletePopup(true) }} alt='trashIcon' className='detailsIcon' />
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
                            <button onClick={() => setShowDeletePopup(false)} className='delete-popup-cancel-btn'>Cancel</button>
                            <button onClick={() => { handleDeleteProduct() }} className='delete-popup-confirm-btn'>Confirm</button>
                        </div>

                    </div>
                </div>
            )}
            {
                showAddProductPopup && (
                    <div className='add-product-popup'>
                        <div className='add-product-popup-content'>
                            <div className='add-product-popup-content-inputs'>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Name</p>
                                    <input type='text' className='add-product-input' onChange={(e)=>setProductName(e.target.value)}/>
                                </div>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Company</p>
                                    <input type='text' className='add-product-input' onChange={(e)=>setProductCompany(e.target.value)} />
                                </div>
                            </div>
                            <div className='add-product-popup-content-inputs'>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Type</p>
                                    <input type='text' className='add-product-input' onChange={(e)=>setProductType(e.target.value)}/>
                                </div>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Price</p>
                                    <input type="number" className='add-product-input' onChange={(e)=>setProductPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className='add-product-popup-content-inputs'>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Quantity</p>
                                    <input type="number" className='add-product-input' onChange={(e)=>setProductQuantity(e.target.value)}/>
                                </div>
                                <div className='add-product-popup-content-inputs-l-i'>
                                    <p className='add-product-p'>Delivery</p>
                                    <input type="number" className='add-product-input' onChange={(e)=>setProductDelivery(e.target.value)}/>
                                </div>
                            </div>
                            <div className='add-product-popup-content-inputs'>
                                <div className='add-product-popup-textArea-container'>
                                    <p className='add-product-p'>Description</p>
                                    <textarea className='add-product-textArea' onChange={(e)=>setProductDescription(e.target.value)}>
                                    </textarea>
                                </div>
                            </div>
                            <div className='add-product-popup-content-inputs'>
                                <div className='add-product-popup-content-inputs-l-i-f'>
                                <div className='choose-product-img-div'>
                                    <input id='fileInput' onChange={(e)=>{setSelectedImage(e.target.files[0])}} type='file' accept='image/*' className='add-product-input' />
                                    <label className='file-label' htmlFor='fileInput'>
                                        Choose image
                                    </label>
                                    {selectedImage && <span className='error-span-popup'>{selectedImage &&selectedImage.name}</span>}
                                    {!selectedImage && <span className='error-span-popup'>No file chosen</span>}
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            {addProductError ?<span className='error-span-popup'>All fields must be filled</span>:<span  className='notErrorSpan'></span>}
                            <div className='add-product-popup-content-btns'>
                                <button className='add-product-cancel-btn' onClick={()=>setShowAddProductPopup(false)}>Cancel</button>
                                <button className='add-product-submit-btn' onClick={()=>handleAddProduct()}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default AdminProducts;
