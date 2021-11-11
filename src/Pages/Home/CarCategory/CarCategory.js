import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreCar from '../../ExploreCars/ExploreCar/ExploreCar';

const CarCategory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)))
    }, [])
    return (
        <Container className="">
            <Row className="">
                {
                    cars.map(car => <ExploreCar key={car._id} car={car}></ExploreCar>)
                }
            </Row>
        </Container>
    );
};

export default CarCategory;