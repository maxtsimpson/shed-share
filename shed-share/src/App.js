import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import MyShed from "./pages/MyShed"
import NewsFeed from "./pages/NewsFeed"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Nav></Nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/MyShed" component={MyShed} />
            <Route path="/NewsFeed" component={NewsFeed} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider >
  );
}

export default App;
