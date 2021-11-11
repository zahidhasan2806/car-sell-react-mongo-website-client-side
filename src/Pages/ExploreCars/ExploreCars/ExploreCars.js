import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../../../Shared/Navigation/Navigation';
import ExploreCar from '../ExploreCar/ExploreCar';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Row>
                    {
                        cars.map(car => <ExploreCar key={car._id} car={car}></ExploreCar>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ExploreCars;