import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
const MakeAdmin = () => {

    const [email, SetEmail] = useState("")
    const [confirm, setConfirm] = useState(false)
    const handleAdminEmail = (e) => {
        SetEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
        const user = { email }
        fetch('https://thawing-dusk-24452.herokuapp.com/users/admin',
            {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setConfirm(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div >
            <h2>Make An Admin</h2>
            <form onSubmit={handleMakeAdmin} className="w-50 mx-auto p-3 border rounded">

                <FloatingLabel type="email" label="Email: " id="myLabel" onBlur={handleAdminEmail} />
                <Button type="submit" variant="outline-success" className="mt-3">Make Admin</Button>
                {confirm && <Alert variant="success">
                    Made admin successfully!
                </Alert>}

            </form>


        </div>
    );
};

export default MakeAdmin;