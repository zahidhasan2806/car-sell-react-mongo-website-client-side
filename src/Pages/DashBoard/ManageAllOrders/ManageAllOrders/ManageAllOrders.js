import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <Container>
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