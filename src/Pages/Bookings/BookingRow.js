
const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
        const { _id, customerName, email, date, img, service, price, status } = booking;

   
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded w-24 h-24">
                        {img && <img src={img} alt="Item picture" />}
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>$ {price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-warning btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;