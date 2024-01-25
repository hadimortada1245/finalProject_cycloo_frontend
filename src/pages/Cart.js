import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import minus from '../images/icons8-minus-24.png'
import plus from '../images/icons8-plus-24.png'
import trash from '../images/icons8-trash-52.png'
import {addOrder} from '../actions/orders';
import '../styles/cart.css';
import { Link ,useNavigate} from 'react-router-dom';
import {getCartData ,increase ,decrease ,removeFromCart} from '../actions/cart';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function Cart(){
    const id=localStorage.getItem('id');
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [doFetch,setDoFetch]=useState(false);
    const cartItems = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCartData(id));
    }, [dispatch,id,doFetch])
    const handleRemove=(product_Id)=>{
        dispatch(removeFromCart(id,product_Id));
        setTimeout(()=>{
            setDoFetch(!doFetch);
        },[200])
    }
    const handleSubtotal=(tab)=>{
        let s=0;
        tab.forEach(element => {
            s+=element.price*element.quantity;
        });
        return s;
    }
    const handleDelivery=(tab)=>{
        let s=0;
        tab.forEach(element => {
            s+=element.delivery;
        });
        return s;
    }
    const handleQuatity=(tab)=>{
        let s=0;
        tab.forEach(element => {
            s+=element.quantity;
        });
        return s;
    }
    const handleTotal=(tab)=>{
        return handleDelivery(tab)+handleSubtotal(tab);
    }
    const handleDecrease=(product_Id)=>{
        dispatch(decrease(id,product_Id));
        setTimeout(()=>{
            setDoFetch(!doFetch);
        },[200])
    }
    const handleIncrease=(product_Id)=>{
        dispatch(increase(id,product_Id));
        setTimeout(()=>{
            setDoFetch(!doFetch);
        },[200])
    }
    const handleOrder=()=>{
        let products=[];
        cartItems.forEach((element)=>{
            products.push({productId:element.product_Id,quantity:element.quantity});
        });
        dispatch(addOrder(id,handleTotal(cartItems),handleDelivery(cartItems),handleQuatity(cartItems),products));
        navigate('/products')
    }
    return(
        
        <div className='cart'>
            <MainNav/>
            <div className='cart-container'>
                <table>
                    <thead>
                        <tr>
                        <td className='cart-heading'>Product</td>
                        <td className='cart-heading'>Name</td>
                        <td className='cart-heading'>Quantity</td>
                        <td className='cart-heading'>Price</td>
                        <td className='cart-heading'>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems.length>0 && cartItems.map((item,index)=>(
                        <tr key={index}>
                        <td className='cart-td-content'><img src={item.img} className='cart-item-img' alt='item'/></td>
                        <td className='cart-td-content cart-td-name-r'>{item.name}</td>
                        <td className='cart-td-qn'><div className='cart-div-qn'> <img src={minus} className='qnControll' alt='minus'onClick={()=>handleDecrease(item.product_Id)}/>{item.quantity}<img  className='qnControll' src={plus} alt='plus' onClick={()=>handleIncrease(item.product_Id,item.maxQuantity)}/></div></td>
                        <td className='cart-td-content'>${item.price}</td>
                        <td className='cart-td-content'><img src={trash} alt='trashIcon' className='trashIcon' onClick={()=>handleRemove(item.product_Id)}/></td>
                    </tr>
                    ))}
                    
                    </tbody>
                </table>
                <div className='cart-second-payment'>
                    <div className='shipment-method'>
                             <p className='shipment-title'>Choose Your receiving method :</p>
                            <div className='div-radio-shipment'> <input type='radio' checked name='shipment'/><p className='shipment-text'>Delivered to your location.</p></div>
                            <div className='div-radio-shipment'> <input type='radio'  name='shipment'/><p className='shipment-text'>I want to view and buy it onsite.</p></div>
                    </div>
                    <div className='totals'>
                        <table className='totals-table'>
                            <thead>
                                <tr>
                                    <td className='total-permanent'>SubTotal:</td>
                                    <td className='total-d'>{handleSubtotal(cartItems)}$</td>
                                </tr>
                            </thead>
                            <tbody>
                               <tr>
                                 <td className='total-permanent' >Delivery:</td>
                                 <td className='total-d'>{handleDelivery(cartItems)}$</td>
                               </tr>
                               <tr>
                                 <td className='total-permanent' >Total Price:</td>
                                 <td className='total-d'>{handleTotal(cartItems)}$</td>
                               </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='cart-buttons-div'>
                        <Link to ='/products'><button className='cart-button'>Continue shopping</button></Link>
                        <button className='cart-button' onClick={()=>{handleOrder()}}>Checkout {handleTotal(cartItems)}$</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Cart;