import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth.js"
import axios from 'axios';

import Navigation from '../../../Shared/Navigation/Navigation.js';

const Purchase = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [cars, setcars] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://thawing-dusk-24452.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => setcars(data))
    }, [])

    const onSubmit = data => {

        axios.post('https://thawing-dusk-24452.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Form submitted successfully");
                    reset();
                }
            })
    };
    return (
        <>
            <Navigation></Navigation>
            <Container className="mt-4">
                <Row className="m-0">
                    <Col md={6} sm={12} >
                        <Row>
                            <Col md={5}>
                                <img src={cars.img} alt="" className="img-fluid" />
                            </Col>
                            <Col md={7}>
                                <Card style={{ width: '18rem' }} className="border-0 text-start">
                                    <Card.Body>
                                        <Card.Title>{cars.name}</Card.Title>
                                        <hr />
                                        <Card.Subtitle className="mb-2 text-muted">{cars.Category}</Card.Subtitle>
                                        <Card.Text>
                                            {cars.description}
                                        </Card.Text>
                                        <h3>Price: {cars.price}৳</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} sm={12} className='text-center'>
                        <h3>Fill-up the Form</h3>
                        <hr />
                        <form className="pt-3 pb-5 border" onSubmit={handleSubmit(onSubmit)}>

                            <input className="m-3  px-4 py-2" defaultValue={user.displayName} {...register("name")} />
                            {cars.name && <input className=" m-3  px-4 py-2" defaultValue={cars.name} {...register("carName", { required: true })} readOnly />}
                            {cars.img && <input className=" m-3  px-4 py-2" defaultValue={cars.img} {...register("carImg", { required: true })} readOnly />}
                            <input className=" m-3  px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">Please Enter Your Email</span>}

                            <input className="m-3  px-4 py-2" placeholder="City"{...register("Address", { required: true })} />

                            <input type="number" className="m-3  px-4 py-2" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                            <input type="date" className="m-3  px-4 py-2"{...register("date", { required: true })} />


                            <input className="m-3  px-4 py-2" defaultValue="pending" readOnly {...register("status")} />

                            {/* submit button */}
                            < input className=" m-3 btn btn-info " type="submit" value="Book now" />
                            <br />


                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Purchase;