import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AllProducts from './Pages/AllProducts/AllProducts';
import Orders from './Pages/Orders/Orders';
import Extra from './Pages/Extra/Extra';
import AddProducts from './Pages/AllProducts/AddProducts/AddProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Redirects/PrivateRoute';
import AllOrder from './Pages/Dashboard/AllOrder/AllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/extra">
              <Extra></Extra>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/allorders">
              <AllOrder></AllOrder>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <PrivateRoute path="/orders/:id">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
