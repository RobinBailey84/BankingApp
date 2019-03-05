import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import AccountContainer from './containers/AccountContainer';
import Navbar from './Navbar';

import Request from './helpers/request';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {customer: null}
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(loggedInUser){
    console.log(loggedInUser);
    // const url = '/api/customers/' + loggedInUser.id;
    // const request = new Request()
    this.setState({ customer: loggedInUser })

  }

  render() {
    if (this.state.customer) return <AccountContainer customer ={this.state.customer} />

    
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/' render= {() => <LoginContainer onLogin={this.handleLogin} />} />
      <Route exact path = '/customers/accounts/' render ={(props) => {
        return<AccountContainer customer ={this.state.customer} />
      }
    }
    />
      </Switch>
      </ React.Fragment>
      </Router>

      );
    }

}

export default App;
