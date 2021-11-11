import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../../Shared/Navigation/Navigation";


const Register = () => {
    const { handleSubmitForm, getNewUserEmail, getNewUserPassword, error, getNewUserName, setUser, setUserName, emailVerification, setError, storeUserDb, name, email, } = useAuth();
    const history = useHistory();

    const location = useLocation();
    const redirect = location?.state?.from || "/home";


    const handlCreateUser = (e) => {
        e.preventDefault();
        handleSubmitForm()
            .then(result => {
                let user = result.user;
                user.email = email;
                user.displayName = name;
                setUser(user);
                storeUserDb(user.email, user.displayName)
                setUserName();
                emailVerification();
                history.push(redirect);
            })
            .catch((err) => {
                setError(err.message)
            })
    }



    return (<>
        <Navigation></Navigation>
        <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="border p-5" >
                <h3>Welcome to Car Venture!</h3>
                <h6>Please Register!</h6>
                <hr />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserName}
                        required placeholder="Enter Your Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" required><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserEmail} required type="email"
                        placeholder="Enter Your Email"
                        aria-label="UserEmail"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></InputGroup.Text>
                    <FormControl onBlur={getNewUserPassword} required type="password"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button onClick={handlCreateUser} className="w-100" variant="outline-dark">Sign Up </Button>
                <div className="text-danger">
                    <p className="text-danger">{error}</p>
                </div>
                <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/login">
                        Already have an Account? Please Login!
                    </NavLink>
                </p>
            </Form>
        </Container>
    </>
    );
};

export default Register;