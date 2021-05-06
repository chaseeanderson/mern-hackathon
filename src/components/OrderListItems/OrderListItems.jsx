export default function OrderListItem({ id, date, qty, total }) {
  return(
    <div>
      id: {id}
      date: {date}
      qty: {qty}
      total: {total}
    </div>
  );
}