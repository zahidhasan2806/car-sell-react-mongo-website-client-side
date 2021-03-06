import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);
    const { carName, date, carImg, _id, payment, carPrice } = props.myOrder;
    const handleDeleteOrder = id => {
        const url = `https://thawing-dusk-24452.herokuapp.com/orders/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload()

                }
            })
            .finally(setShow(false))
    };
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={carImg} />
                <Card.Body>
                    <Card.Title>{carName}</Card.Title>
                    <Card.Text>
                        Price:  {carPrice}
                    </Card.Text>
                    <Card.Text>
                        Order Date:  {date}
                    </Card.Text>
                    <Card.Text>
                        {payment ? "Paid" : <Link to={`/dashboard/payment/${_id}`}><Button variant="success">Pay</Button></Link>}
                    </Card.Text>
                    <Button onClick={() => setShow(true)} variant="danger">Cancel Order</Button>
                    <Modal show={show} onHide={handleClose}>

                        <Modal.Body>Are you sure?</Modal.Body>
                        <Modal.Footer>

                            <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                                Yes
                            </Button>
                            <Button variant="primary" onClick={handleNoBtn}>
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;