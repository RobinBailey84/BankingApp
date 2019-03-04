import React, {Component} from 'react';

import Request from '../helpers/request';
import LoginForm from '../components/LoginForm';
import SingleCustomer from '../components/SingleCustomer';
import Navbar from '../Navbar';


class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {loggedIn: false}
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    const url = '/authentication/login'
    console.log(login);
      if(login.username){
        window.location = "/customer/accounts/" + data.customer.id;
      }
    }


  render() {
    return <LoginForm onSubmit={this.handleLogin}/>

  }

  //Following method checks if the Json object is empty
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
}

export default LoginContainer;
