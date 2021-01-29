import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/common/Header';
import NotFound from '../components/common/NotFound';
import FacebookPosts from '../components/FacebookPosts';
import HardwareData from '../components/HardwareData';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/fb-posts" />
          <Route exact path='/fb-posts' component={FacebookPosts} />
          <Route exact path='/hardware' component={HardwareData} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
