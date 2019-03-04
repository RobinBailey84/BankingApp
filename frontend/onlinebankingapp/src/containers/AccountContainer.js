import React, {Component} from 'react';
import AccountList from '../components/AccountList';
import Request from '../helpers/request.js';

class AccountContainer extends Component{
  constructor(props){
    super(props);
    this.state = {accounts: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/customers/1/accounts').then((data) => {
      this.setState({accounts: data._embedded.accounts})
      console.log(data);
    })
  }

  render(){
    console.log(this.props.customer);
    return(

      <AccountList accounts={this.state.accounts}/>
    )
  }


}

export default AccountContainer;
