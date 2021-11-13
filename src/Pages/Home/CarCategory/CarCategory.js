import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreCar from '../../ExploreCars/ExploreCar/ExploreCar';

const CarCategory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = "https://thawing-dusk-24452.herokuapp.com/cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)))
    }, [])
    return (
        <Container className="mt-5 ">
            <h2 className='text-start'>NEW ARRIVALS</h2>
            <Row className="">
                {
                    cars.map(car => <ExploreCar key={car._id} car={car}></ExploreCar>)
                }
            </Row>
        </Container>
    );
};

export default CarCategory;