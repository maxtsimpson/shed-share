import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import MyShed from "./pages/MyShed"
import NewsFeed from "./pages/NewsFeed"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={NewsFeed} />
          <Route path="/MyShed" component={MyShed} />
          <Route path="/NewsFeed" component={NewsFeed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
