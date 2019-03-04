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



  handleLogin(){
    const url = '/api/customers/1'
    const request = new Request()

    request.get(url).then((data) => {
      this.setState({customer: data})
    })
  }
  render() {
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/' component={LoginContainer} onLogin={this.handleLogin}/>
      <Route exact path = '/customers/accounts/' render ={(props) => {
        if(!this.state.customer){
        this.handleLogin();
      }
        console.log(this.state.customer);
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
