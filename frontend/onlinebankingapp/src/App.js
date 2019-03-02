import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/customers' component={CustomerContainer}/>
      </Switch>
      </ React.Fragment>
      </Router>

    );
  }
}

export default App;
