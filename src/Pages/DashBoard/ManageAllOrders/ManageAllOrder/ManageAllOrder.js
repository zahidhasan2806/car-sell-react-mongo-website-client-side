import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const ManageAllOrder = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    const { carName, name, email, status, _id, Address, Contact } = props.order;


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

    const handleUpdateStatus = () => {
        const updatedStatus = { status: "shipped" };

        const url = `https://thawing-dusk-24452.herokuapp.com/orders/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    alert('Order approved')
                    window.location.reload()
                }

            })
    }

    return (
        <tr>
            <td>{carName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{Contact}</td>
            <td>{Address}</td>
            <td>
                {status === "shipped" && <FontAwesomeIcon className="text-success" icon={faCheck} />}
                {status}
            </td>
            <td>
                <Button onClick={handleUpdateStatus} variant="secondary" className="btn btn-success w-100">
                    Confirm
                </Button>


            </td>
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

export default ManageAllOrder;