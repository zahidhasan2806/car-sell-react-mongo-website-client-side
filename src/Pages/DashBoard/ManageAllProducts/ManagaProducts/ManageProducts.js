import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Container>
            <div className="table-responsive">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Car Category</th>
                            <th>Car ID</th>
                            <th>Price</th>
                            <th>Cancel Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map(car => (<ManageProduct key={car._id} car={car}></ManageProduct>))
                        }
                    </tbody>
                </Table>
            </div>

        </Container >
    );
};

export default ManageProducts;