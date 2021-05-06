import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import * as ordersAPI from "../../utilities/orders-api";
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import { useState, useEffect } from 'react';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const updatedOrders = await ordersAPI.getOrders()
      setOrders(updatedOrders);
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
      <OrderList orders={orders} />
    </div>


    </main>
  );
}