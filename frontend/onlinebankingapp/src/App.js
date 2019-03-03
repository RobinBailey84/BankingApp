import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/' component={LoginContainer}/>
      </Switch>
      </ React.Fragment>
      </Router>

    );
  }
}

export default App;
