import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import minus from '../images/icons8-minus-24.png'
import plus from '../images/icons8-plus-24.png'
import trash from '../images/icons8-trash-52.png'
import bike1 from '../images/image 3.png'
import '../styles/cart.css';
import { Link } from 'react-router-dom';
function Cart(){
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
                    <tr>
                        <td className='cart-td-content'><img src={bike1} className='cart-item-img' alt='item'/></td>
                        <td className='cart-td-content cart-td-name-r'>Pacific</td>
                        <td className='cart-td-qn'><div className='cart-div-qn'> <img src={minus} className='qnControll' alt='minus'/>1<img  className='qnControll' src={plus} alt='plus'/></div></td>
                        <td className='cart-td-content'>$2700</td>
                        <td className='cart-td-content'><img src={trash} alt='trashIcon' className='trashIcon'/></td>
                    </tr>
                    <tr>
                        <td className='cart-td-content'><img src={bike1} className='cart-item-img' alt='item'/></td>
                        <td className='cart-td-content'>Pacific</td>
                        <td className='cart-td-qn'><div className='cart-div-qn div-controlle'> <img src={minus} className='qnControll' alt='minus'/>1<img  className='qnControll' src={plus} alt='plus'/></div></td>
                        <td className='cart-td-content'>$2700</td>
                        <td className='cart-td-content'><img src={trash} alt='trashIcon' className='trashIcon'/></td>
                    </tr>
                    </tbody>
                </table>
                <div className='cart-second-payment'>
                    <div className='shipment-method'>
                             <p className='shipment-title'>Choose Your receiving method :</p>
                            <div className='div-radio-shipment'> <input type='radio' name='shipment'/><p className='shipment-text'>Delivered to your location.</p></div>
                            <div className='div-radio-shipment'> <input type='radio' name='shipment'/><p className='shipment-text'>I want to view and buy it onsite.</p></div>
                    </div>
                    <div className='totals'>
                        <table className='totals-table'>
                            <thead>
                                <tr>
                                    <td className='total-permanent'>SubTotal:</td>
                                    <td className='total-d'>3900$</td>
                                </tr>
                            </thead>
                            <tbody>
                               <tr>
                                 <td className='total-permanent' >Delivery:</td>
                                 <td className='total-d'>0$</td>
                               </tr>
                               <tr>
                                 <td className='total-permanent' >Total Price:</td>
                                 <td className='total-d'>3900$</td>
                               </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='cart-buttons-div'>
                        <Link to ='/products'><button className='cart-button'>Continue shopping</button></Link>
                        <button className='cart-button'>Checkout 3900$</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Cart;