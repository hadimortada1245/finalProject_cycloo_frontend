import ridesImg from '../images/icons8-cycling-96.png';
import ordersImg from '../images/icons8-maximum-order-64.png';
import requestImg from '../images/icons8-request-64.png';
import reportsImg from '../images/icons8-report-100.png';
import cancel from '../images/icons8-x-50.png';
import approve from '../images/icons8-correct-64.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getCountOrders} from '../actions/totalOrders';
import {getCountReports} from '../actions/totalRports';
import {getCountRides} from '../actions/rides';
import {getCountRequests} from '../actions/totalRequests';
import { useEffect } from 'react';
function AdminOverview() {
    const ordersCount = useSelector((state) => state.totalOrders);
    const reportsCount = useSelector((state) => state.totalReports);
    const requestsCount = useSelector((state) => state.totalRequests);
    const ridesCount = useSelector((state) => state.rides);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountOrders());
        dispatch(getCountReports());
        dispatch(getCountRides());
        dispatch(getCountRequests());
    }, [dispatch]);
    return (
        <>
            <div className='overview-cells'>
                <div className='overview-cell'><img src={ridesImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total rides</p>
                    <p className='total-p-d'>{ridesCount}</p></div>
                <div className='overview-cell'><img src={ordersImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total orders</p>
                    <p className='total-p-d'>{ordersCount}</p></div>
                <div className='overview-cell'><img src={requestImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total requests</p>
                    <p className='total-p-d'>{requestsCount}</p></div>
                <div className='overview-cell'><img src={reportsImg} className='cellIcon' alt='cellIcon' /> <p className='total-p-d'>Total reports</p>
                    <p className='total-p-d'>{reportsCount}</p></div>
            </div>
            <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>User</th>
                    <th className='order-th'>Level</th>
                    <th className='order-th'>ride</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Distance</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="User">Anna klio</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="ride">Zahle</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="User">Anna klio</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="ride">Zahle</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="User">Anna klio</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="ride">Zahle</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="User">Anna klio</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="ride">Zahle</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={approve} alt='approve' className='requestActions'/>
                    <img src={cancel} alt='cancel' className='requestActions'/>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
            </>
    );
}
export default AdminOverview;