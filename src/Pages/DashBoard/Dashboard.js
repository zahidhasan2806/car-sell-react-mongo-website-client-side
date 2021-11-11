import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import 'react-pro-sidebar/dist/css/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageAllProducts/ManagaProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Reviews from './Reviews/Reviews/Reviews';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, user } = useAuth();
    return (
        <Row>
            <Col md={3} className>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="d-flex flex-column">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="d-flex flex-column">
                                <Nav.Link as={Link} to={`${url}/myorders`}>My Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/reviews`}>Review</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageallorders`}>Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageproducts`}>Manage Products</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addnewproduct`}>Add A Product</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                                <Link to="/"><Button variant="dark" onClick={logOut}>Logout</Button></Link>
                                <Link to="/"><Button variant="dark">Home Page</Button></Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
            <Col md={9}>
                <Switch>
                    <Route exact path={path}>
                        <h1>Hello! <span className="text-success">{user.displayName}</span> Welcome to Car Venture.</h1>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addnewproduct`}>
                        <AddNewProduct></AddNewProduct>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </Col>
        </Row>
    );
};

export default Dashboard;