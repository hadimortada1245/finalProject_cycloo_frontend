import ridesImg from '../images/icons8-cycling-96.png'
import ordersImg from '../images/icons8-maximum-order-64.png'
import reviewsImg from '../images/icons8-rating-68.png'
import likesImg from '../images/icons8-like-48.png'
import map from '../images/WhatsApp Image 2023-12-27 at 13.15.36.jpeg'
function UserOverview() {
    return (
        <>
            <div className='overview-cells'>
                <div className='overview-cell'><img src={ridesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total rides</p>
                    <p className='total-p-d'>25</p></div>
                <div className='overview-cell'><img src={ordersImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total orders</p>
                    <p className='total-p-d'>15</p></div>
                <div className='overview-cell'><img src={reviewsImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total reviews</p>
                    <p className='total-p-d'>43</p></div>
                <div className='overview-cell'><img src={likesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Liked rides</p>
                    <p className='total-p-d'>5</p></div>
            </div>
            <div className='last-ride-d'>
                <p className='last-ride-d-p'>Last rides</p>
                <div className='last-ride-content-d'>
                    <div><img className='map-latest-rides-d' src={map} alt='map' /> </div>
                    <div className='last-ride-content-texts'>
                        <p className='last-ride-content-t-t'>Quaroun on 11/2/2023</p>
                        <p className='last-ride-desc'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                    </div>
                </div>
                <hr></hr>
                <div className='last-ride-content-d'>
                    <div><img className='map-latest-rides-d' src={map} alt='map' /> </div>
                    <div className='last-ride-content-texts'>
                        <p className='last-ride-content-t-t'>Quaroun on 11/2/2023</p>
                        <p className='last-ride-desc'>Discover the joy of a breezy bike ride through Quaroun and Jeb Jenin villages—51.03 km with an easy 1800m elevation gain. In just 2 hours and 48 minutes, enjoy clean, smooth roads and embrace the simplicity of this refreshing journey. Perfect for all levels, this quick escape invites you to pedal through the scenic charm of these villages. Grab your bike, relish the ride, and let the open road rejuvenate your spirit!</p>
                    </div>
                </div>
            </div></>
    );
}
export default UserOverview;