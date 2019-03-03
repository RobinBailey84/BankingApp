import React, {Component} from 'react';

import Request from '../helpers/request';
import LoginForm from '../components/LoginForm';
import SingleCustomer from '../components/SingleCustomer';

class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customer: {}}
    this.state = {loggedIn: false}
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    const url = '/authentication/login'
    const method = 'post'
    const request = new Request()

    request.post(url, login, method).then((data) => {
      this.setState({customer: data})
      if(!this.isEmpty(data)){
        this.setState({loggedIn: true})
      }
      console.log(data);
    })
  }

  render(){
    if(this.state.loggedIn){
      return <SingleCustomer customer={this.state.customer} />
    }else{
      return <LoginForm onSubmit={this.handleLogin}/>
    }
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
