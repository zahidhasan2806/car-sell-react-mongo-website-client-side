import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/DashBoard/Dashboard';
import ExploreCars from './Pages/ExploreCars/ExploreCars/ExploreCars';
import Purchase from './Pages/ExploreCars/Purchase/Purchase';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivetRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Payment from './Pages/DashBoard/Payment/Payment';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders/MyOrders';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import AddNewProduct from './Pages/DashBoard/AddNewProduct/AddNewProduct';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import Reviews from './Pages/DashBoard/Reviews/Reviews/Reviews';
import ManageProducts from './Pages/DashBoard/ManageAllProducts/ManagaProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <ExploreCars></ExploreCars>
            </Route>
            <PrivateRoute path="/cars/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </BrowserRouter>

      </AuthProvider>



    </div>
  );
}

export default App;
