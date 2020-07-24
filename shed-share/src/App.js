import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import MyShed from "./pages/MyShed"
import NewsFeed from "./pages/NewsFeed"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/MyShed" component={MyShed} />
          <Route path="/NewsFeed" component={NewsFeed} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
