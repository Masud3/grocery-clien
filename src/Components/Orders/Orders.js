import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() =>{
        fetch('http://localhost:5000/products',{
            method: 'GET',
            header:{
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2>You have: {orders.length}orders</h2>
            {
                orders.map(order => <li key={order._id}>{order.name} {order.price}</li>)
            }
        </div>
    );
};

export default Orders;