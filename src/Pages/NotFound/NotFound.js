import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='container p-4'>
            <Alert variant="danger">
                404!Page Not Found
            </Alert>
            <Link to='/'>
                <Button className="w-75" variant="outline-dark">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;