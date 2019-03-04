import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import AccountContainer from './containers/AccountContainer';
import Navbar from './Navbar';


class App extends Component {

  constructor(props){
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    const url = '/authentication/login'
    const request = new Request()

    request.post(url, login).then((data) => {
      this.setState({customer: data})
      if(!this.isEmpty(data)){
        this.setState({loggedIn: true})
      }
      console.log(data);
    })
  }
  render() {
    return (
      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path = '/' component={LoginContainer} onLogin={this.handleLogin}/>
      <Route exact path = 'customers/accounts/' render ={(props) => {
        const customer = this.handleLogin();
        return<AccountContainer customer ={customer} />
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
