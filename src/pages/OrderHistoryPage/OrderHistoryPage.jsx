import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import * as ordersAPI from "../../utilities/orders-api";
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import { useState, useEffect } from 'react';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const updatedOrders = await ordersAPI.getOrders()
      setOrders(updatedOrders);
      setActiveOrder(updatedOrders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
    <div>
      <OrderList orders={orders} setActiveOrder={setActiveOrder} activeOrder={activeOrder} />
    </div>
    <div>
      <OrderDetail order={activeOrder} />
    </div>


    </main>
  );
}