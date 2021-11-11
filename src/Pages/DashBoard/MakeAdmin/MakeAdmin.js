import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
const MakeAdmin = () => {

    const [email, SetEmail] = useState("")
    const handleAdminEmail = (e) => {
        SetEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
        const user = { email }
        fetch('http://localhost:5000/users/admin',
            {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault()
    }
    return (
        <div >
            <h2>Make An Admin</h2>
            <form onSubmit={handleMakeAdmin} className="w-25 mx-auto p-3">

                <FloatingLabel type="email" label="Email: " id="myLabel" onBlur={handleAdminEmail} />
                <Button type="submit" variant="outline-success" className="mt-3">Make Admin</Button>

            </form>


        </div>
    );
};

export default MakeAdmin;