import React, { useState, useContext } from 'react';
// import { ScrollView } from 'react-native';
import './App.css';
import Nav from "./components/Nav";
import MyShed from "./pages/MyShed"
import NewsFeed from "./pages/NewsFeed"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/auth';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/MyShed" component={MyShed} />
              <PrivateRoute path="/NewsFeed" component={NewsFeed} />
              <PrivateRoute path="/Home" component={Home} />
              <Route path="/Login" component={Login} />
              <Route path="/Signup" component={Signup} />
            </Switch>
        </Router>
      </AuthContext.Provider >
  );
}

export default App;
