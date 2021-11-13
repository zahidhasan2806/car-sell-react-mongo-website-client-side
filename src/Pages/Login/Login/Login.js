import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import UseAuth from "../../../Hooks/useAuth.js";



const Login = () => {
    const { signInWithGoogle, signInWithEmail, getNewUserPassword, getNewUserEmail, error, setUser, setError, storeGoogleUserDb } = UseAuth();
    const history = useHistory();

    const location = useLocation();
    const redirect = location?.state?.from || "/dashboard";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                storeGoogleUserDb(user.email, user.displayName)
                history.push(redirect);
            }).catch((err) => {
                setError(err.message)
            })
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then(result => {
                setUser(result.user);
                history.push(redirect);
            }).catch((err) => {
                setError(err.message)
            })

    }

    return (
        <Container className="d-flex align-items-center justify-content-center App my-5">

            <Form className="border p-5 rounded">
                <h3>Please Login!</h3>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserEmail} type="email" required
                        placeholder="Your Email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl required onBlur={getNewUserPassword}
                        placeholder="Password" type="password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <div className="text-danger">
                    <p>{error}</p>
                </div>
                <Button onClick={handleEmailLogin} type="submit" className="w-100" variant="outline-dark">Log-In </Button>
                <div className="or-seperator"><i>or</i></div>
                <Button onClick={handleGoogleLogin} className="w-100" variant="outline-dark">Log-In with <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></Button>
                <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/register">
                        Need an Account? Please Sign up!
                    </NavLink>
                </p>
            </Form>
        </Container>
    );
};

export default Login;