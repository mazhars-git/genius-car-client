const BookingRow = ({booking}) => {
    const {customerName, email, date, service, price, img} = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-warning btn-xs">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;