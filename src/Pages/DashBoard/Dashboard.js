import { faComment, faUser } from '@fortawesome/free-regular-svg-icons';
import { faColumns, faFolderPlus, faShoppingBasket, faShoppingCart, faSignOutAlt, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumb, Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,

} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageAllProducts/ManagaProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Reviews from './Reviews/Reviews/Reviews';
import "./Dashboard.css"


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, user, admin } = useAuth();
    return (
        <Row className="me-0 px-0">
            <Col md={3} className="px-0" >
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container className="d-flex flex-column dashboard-route">

                        <Navbar.Brand className="text-white me-auto fs-2 fw-bold" href="/home">Car Venture</Navbar.Brand>
                        <hr className="w-100 bg-white" />

                        <Navbar.Text className="text-white my-1 fs-4 text-start me-auto">
                            <FontAwesomeIcon className="text-white" icon={faColumns} />    Dashboard
                        </Navbar.Text>

                        <Navbar.Toggle className="me-auto text-start" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="me-auto text-start" id="responsive-navbar-nav">
                            <Nav className="d-flex flex-column fs-6">
                                {!admin && <>  <Nav.Link as={Link} to={`${url}/myorders`}><FontAwesomeIcon icon={faShoppingCart} /> My Orders</Nav.Link> <br />

                                    <Nav.Link as={Link} to={`${url}/reviews`}> <FontAwesomeIcon icon={faComment} /> Review</Nav.Link><br />
                                </>}
                                {admin && <div>
                                    <Nav.Link as={Link} to={`${url}/manageallorders`}> <FontAwesomeIcon icon={faShoppingBasket} /> Manage All Orders</Nav.Link><br />
                                    <Nav.Link as={Link} to={`${url}/manageproducts`}> <FontAwesomeIcon icon={faTasks} /> Manage Products</Nav.Link><br />
                                    <Nav.Link as={Link} to={`${url}/addnewproduct`}><FontAwesomeIcon icon={faFolderPlus} /> Add A Product</Nav.Link><br />
                                    <Nav.Link as={Link} to={`${url}/makeadmin`}><FontAwesomeIcon icon={faUserShield} /> Make Admin</Nav.Link><br />
                                </div>}
                                <hr className="w-100 mx-auto text-white" />

                                <h6 className="text-white ">{admin ? <FontAwesomeIcon icon={faUserShield} /> : <FontAwesomeIcon icon={faUser} />}   {user.displayName}</h6>
                                <Link to="/"><Button variant="dark" onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
            <Col md={9} className="px-0">
                <Breadcrumb className="my-4  ms-3">
                    <Breadcrumb.Item href="/home" className="fs-4">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="fs-4"> Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/payment/:orderId`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addnewproduct`}>
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Col>
        </Row>
    );
};

export default Dashboard;