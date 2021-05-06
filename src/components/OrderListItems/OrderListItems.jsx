import OrderDetail from '../OrderDetail/OrderDetail';

export default function OrderListItem({ id, date, qty, total, setActiveOrder, order }) {


  // function handleShowDetail() {
  //   return <OrderDetail />
    
  // }

  return(
    <div>
      id: {id}
      date: {date}
      qty: {qty}
      total: {total}
      <button onClick={() => setActiveOrder(order)}>DEETZ</button>
    </div>
  );
}