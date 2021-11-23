import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreCar = (props) => {
    const { name, price, description, Category, _id, image } = props.car;
    return (
        <Col md={4} sm={6} className='my-3 items'>
            <Card className="text-start" style={{ minHeight: "475px" }}>
                <Card.Img variant="top" height="200px" src={`data:image/png;base64,${image}`} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Category: {Category}</Card.Subtitle>

                    <Card.Text>
                        {(description)}..............
                    </Card.Text>
                    <h2>Price: ৳{price}</h2>
                </Card.Body>
                <Card.Footer className="bg-primary bg-opacity-10 p-0">
                    <Link to={`/cars/${_id}`}>
                        <Button className="w-100" variant="dark">Purchase Now</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

// {`/cars/${_id}`}

export default ExploreCar;