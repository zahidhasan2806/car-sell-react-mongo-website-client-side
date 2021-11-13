import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://thawing-dusk-24452.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <Container>
            <div className="text-start mt-5">
                <h2 className="fw-bold">Manages All Orders</h2>
                <hr />
            </div>
            <div className="table-responsive">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Confirm</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (<ManageAllOrder key={order._id} order={order}></ManageAllOrder>))
                        }
                    </tbody>
                </Table>
            </div>

        </Container >
    );
};

export default ManageAllOrders;