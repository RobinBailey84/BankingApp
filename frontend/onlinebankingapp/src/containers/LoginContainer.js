import React, {Component} from 'react';

import Request from '../../helpers/request';

class LoginContainer extends Component {

  contructor(props){
    super(props);
    this.state = {customers: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/')
  }
}
