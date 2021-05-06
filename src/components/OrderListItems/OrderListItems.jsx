import OrderDetail from '../OrderDetail/OrderDetail';
import "./OrderListItems.css";

export default function OrderListItem({ id, date, qty, total, setActiveOrder, order, activeOrder }) {
  date = date.slice(0, 10).split('-');
  let month = date[2];
  let year = date[0];
  let day = date[1];
  return(
    <div className="OrderListItems" onClick={() => setActiveOrder(order)}>
      <div className="LeftColumn">
        <h4>Order ID: <span className="IdText">{id}</span> </h4>
        {`${month}/${day}/${year}`}
      </div>
      <div className="RightColumn">
      <h4>${total}</h4>
      <p>{qty} items</p>
      </div>
    </div>
  );
}