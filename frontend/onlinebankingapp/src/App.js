import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>

      <Route exact path = 'customers/' component={CustomerContainer}/>

      </ React.Fragment>
      </Router>

    );
  }
}

export default App;
