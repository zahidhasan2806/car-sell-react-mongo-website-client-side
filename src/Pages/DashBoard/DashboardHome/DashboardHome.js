import React from 'react';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user, logout } = useAuth();
    return (
        <Container style={{ maxWidth: "30rem", marginBottom: "25px" }}>
            <Card className="border-0 shadow">
                <Card.Header as={"h4"} className="text-center border-0 mt-1">
                    Profile
                </Card.Header>
                <Card.Body className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img
                            src="https://i.ibb.co/5GzXkwq/user.png"
                            alt="Admin"
                            className="rounded-circle"
                            width="150"
                        />
                        <div className="mt-3">
                            <h4>{user.displayName}</h4>
                            <p className="text-secondary mb-1">{user.email}</p>
                        </div>
                        <Button onClick={logout} className="px-4 logout-btn btn-main">
                            Logout
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Alert variant='success' className='fw-bold'>To check Admin role login with "admin@admin.com" and password "123456"</Alert>
        </Container>
    );
};

export default DashboardHome;