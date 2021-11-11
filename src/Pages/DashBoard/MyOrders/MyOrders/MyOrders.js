import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from "../../../../Hooks/useAuth.js";
import MyOrder from '../MyOrder/MyOrder.js';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const myOrders = orders.filter(order => user.email === order.email);
    return (
        <div className="my-5">
            <h1 className="text-center">Welcome to Car Venture</h1>
            <Container className="my-5">
                <h1>My Orders</h1>
                <hr />
                <Row>
                    {
                        myOrders.map(myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>)
                    }</Row>
            </Container>
        </div>
    );
};

export default MyOrders;