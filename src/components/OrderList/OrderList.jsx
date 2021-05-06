import OrderListItem from "../OrderListItems/OrderListItems";


export default function OrderList({ orders }) {

  return(
    <div>
      {orders.map(order => <OrderListItem 
      key={order._id}
      id={order.orderId}
      date={order.createdAt}
      qty={order.totalQty}
      total={order.orderTotal}
      />)}
    </div>
  );
}