import OrderDetail from "../OrderDetail/OrderDetail";
import OrderListItem from "../OrderListItems/OrderListItems";
import './OrderList.css';


export default function OrderList({ orders, setActiveOrder, activeOrder}) {

  return(
    <div className="OrderList">
      {orders.map(order => <OrderListItem 
      key={order._id}
      id={order.orderId}
      date={order.createdAt}
      qty={order.totalQty}
      total={order.orderTotal}
      setActiveOrder={setActiveOrder}
      activeOrder={activeOrder}
      order={order}
      />)}
    </div>
  );
}