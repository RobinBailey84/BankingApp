import React, {Component} from 'react';
import AccountList from '../components/AccountList';
import Request from '../helpers/request.js';
import TransactionForm from '../components/TransactionForm';

class AccountContainer extends Component{
  constructor(props){
    super(props);
    this.state = {accounts: []}
    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
  }

  componentDidMount(){
    const url = '/api/customers/' + this.props.customer.id + '/accounts'
    let request = new Request()
    request.get(url).then((data) => {
      console.log('data', data);
      this.setState({accounts: data._embedded.accounts})
      console.log(data);
    });
  }

  handleTransactionSubmit(transaction){
    const request = new Request();

    request.post('/api/transactions', transaction).then(() => {
      window.location = '/customers/accounts/';
    })

    // put / patch an update on the customer to reduce their balance by the value of the transaction
    
  }



  render(){
    return(
      <div>
      <AccountList accounts={this.state.accounts}/>

      <TransactionForm accounts={this.state.accounts} onSubmit={this.handleTransactionSubmit}/>

      </div>
    )
  }


}

export default AccountContainer;
