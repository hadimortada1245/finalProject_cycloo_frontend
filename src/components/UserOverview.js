import ridesImg from '../images/icons8-cycling-96.png'
import ordersImg from '../images/icons8-maximum-order-64.png'
import reviewsImg from '../images/icons8-rating-68.png'
import likesImg from '../images/icons8-like-48.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCountLikes } from '../actions/totalLikes';
import { getCountRidesByUserId } from '../actions/totalRides';
import { getCountOrdersByUserId } from '../actions/totalOrders';
import { getTwoRides } from '../actions/rides';
import { useEffect } from 'react';
function UserOverview() {
    const id = localStorage.getItem('id');
    const likesCount = useSelector((state) => state.totalLikes);
    const ridesCount = useSelector((state) => state.totalRides);
    const ordersCount = useSelector((state) => state.totalOrders);
    const rides = useSelector((state) => state.rides);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountLikes(id));
        dispatch(getCountRidesByUserId(id));
        dispatch(getCountOrdersByUserId(id));
        dispatch(getTwoRides(id));
    }, [dispatch, id]);
    const validDate = (d) => {
        const dateObject = new Date(d);
        if (isNaN(dateObject.getTime())) {
            return "";
        }

        return dateObject.toISOString().split('T')[0];
    };
    return (
        <>
            <div className='overview-cells'>
                <div className='overview-cell'><img src={ridesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total rides</p>
                    <p className='total-p-d'>{ridesCount}</p></div>
                <div className='overview-cell'><img src={ordersImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total orders</p>
                    <p className='total-p-d'>{ordersCount}</p></div>
                <div className='overview-cell'><img src={reviewsImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total reviews</p>
                    <p className='total-p-d'>12</p></div>
                <div className='overview-cell'><img src={likesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Liked rides</p>
                    <p className='total-p-d'>{likesCount}</p></div>
            </div>

            <div className='last-ride-d'>
                <p className='last-ride-d-p'>Last rides</p>
                {rides && rides[0] && <div className='last-ride-content-d'>
                    <div><img className='map-latest-rides-d' src={rides[0].mapImg} alt='map' /> </div>
                    <div className='last-ride-content-texts'>
                        <p className='last-ride-content-t-t'>{rides[0].title} on {validDate(rides[0].date)}</p>
                        <p className='last-ride-desc'>{rides[0].description}</p>
                    </div>
                </div>}
                <hr></hr>
                {rides && rides[1] &&<div className='last-ride-content-d'>
                    <div><img className='map-latest-rides-d' src={rides[1].mapImg} alt='map' /> </div>
                    <div className='last-ride-content-texts'>
                        <p className='last-ride-content-t-t'>{rides[1].title} on {validDate(rides[1].date)}</p>
                        <p className='last-ride-desc'>{rides[1].description}</p>
                    </div>
                </div>}
                {
                    rides.length===0 &&<div>This section is empty</div>
                }
            </div></>
    );
}
export default UserOverview;