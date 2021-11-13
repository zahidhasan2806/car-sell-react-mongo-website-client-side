import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);
    const { name, price, Category, _id } = props.car;

    const handleDeleteOrder = id => {
        const url = `https://thawing-dusk-24452.herokuapp.com/cars/${id}`;

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
        <tr>
            <td>{name}</td>
            <td>{Category}</td>
            <td>{_id}</td>
            <td>{price}</td>
            <td><button onClick={() => setShow(true)} className="btn btn-danger w-100">Delete</button></td>
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
        </tr>
    );
};

export default ManageProduct;