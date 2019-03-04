import React, {Component} from 'react';

import Request from '../helpers/request';
import LoginForm from '../components/LoginForm';
import SingleCustomer from '../components/SingleCustomer';
import Navbar from '../Navbar';


class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    console.log('hello');
    const url = '/authentication/login'
    const request = new Request();

    request.post(url, login)
    .then(data => {
      console.log('response', data);

      return data
    })
    .then((data) => {
      this.props.onLogin(data);
    })
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
