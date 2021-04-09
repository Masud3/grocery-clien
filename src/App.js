import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Deals from './Components/Deals/Deals';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import Header from './Components/Home/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { createContext } from 'react';
export const userContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/deals">
          <Deals />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
