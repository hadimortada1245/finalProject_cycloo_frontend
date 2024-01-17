import editIcon from '../images/icons8-write-48.png'
import trashIcon from '../images/icons8-trash-52.png'
import detailsIcon from '../images/icons8-view-30.png'
function UserRides(){
    return (
        <>
        <table className='order-table'>
            <thead>
                <tr>
                    <th className='order-th'>Name</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Memeber</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Cost</th>
                    <th className='order-th'>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="Name">Zahle</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Memeber">10</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Cost">25$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Zahle</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Memeber">10</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Cost">25$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Zahle</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Memeber">10</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Cost">25$</td>
                <td className='td-user-d' data-cell="Details"><img src={detailsIcon} alt='detailsIcon' className='detailsIcon'/></td>
                </tr>
            </tbody>
        </table>
        <table className='order-table1'>
            <thead>
                <tr>
                    <th className='order-th'>Name</th>
                    <th className='order-th'>Date</th>
                    <th className='order-th'>Location</th>
                    <th className='order-th'>Dificulty</th>
                    <th className='order-th'>Distance</th>
                    <th className='order-th'>Actions</th>   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='td-user-d' data-cell="Name">Zahle</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Manara</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                <tr>
                <td className='td-user-d' data-cell="Name">Zahle</td>
                <td className='td-user-d' data-cell="Date">11/02/2024</td>
                <td className='td-user-d' data-cell="Location">Manara</td>
                <td className='td-user-d' data-cell="Dificulty">Hard</td>
                <td className='td-user-d' data-cell="Distance">71 km</td>
                <td className='td-user-d' data-cell="Actions">
                    <div className="icons-div">
                    <img src={editIcon} alt='editIcon' className='detailsIcon'/>
                    <img src={trashIcon} alt='trashIcon' className='detailsIcon'/>
                    </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
        </>
    )
}
export default UserRides;