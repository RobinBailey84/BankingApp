import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerContainer from './containers/CustomerContainer';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/login' component={LoginContainer}/>
      <Route exact path = '/customers' component={CustomerContainer}/>
      </Switch>
      </ React.Fragment>
      </Router>

    );
  }
}

export default App;
