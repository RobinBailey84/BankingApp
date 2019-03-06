import React, {Component} from 'react';
import AccountList from '../components/AccountList';
import Request from '../helpers/request.js';
import TransactionForm from '../components/TransactionForm';
import SingleCustomer from '../components/SingleCustomer';
import EditCustomerForm from '../components/EditCustomerForm';


class AccountContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      accounts: [],
      customer: null,
      selectedAccount: null
    }
    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.updateAccountBalance = this.updateAccountBalance.bind(this);
    this.handleCustomerEdit = this.handleCustomerEdit.bind(this);
    this.selectAccount = this.selectAccount.bind(this);

  }

  componentDidMount(){
    this.getAccounts();
    // const url2 = '/api/customers/' + this.props.customer.id
    // let request2 = new Request()
    // request2.get(url2).then((data) => {
    //   this.setState({customer: data.customer})

  }

  getAccounts(){
    const url = '/api/customers/' + this.props.customer.id + '/accounts'
    let request = new Request()
    request.get(url).then((data) => {
      this.setState({accounts: data._embedded.accounts});
    });
  }


  getCustomer(){
    const url = '/api/customers/' + this.props.customer.id
    let request = new Request()
    request.get(url).then((data) => {
      console.log(data);
      this.setState({customer: this.props.customer.id});
    })
  }




  updateAccountBalance(transaction, account){
  const newBalance = account.balance - transaction.amount;
  const newAccount = {
    "accountNumber": account.accountNumber,
    "sortCode": account.sortCode,
    "accountName": account.accountName,
    "accountType": account.accountType,
    "interestRate": account.interestRate,
    "balance": newBalance
  }
  return newAccount;
  }

  handleTransactionSubmit(transaction){
    console.log('transaction', transaction);
    let request = new Request();
    request.post('/api/transactions', transaction)

    // put / patch an update on the customer to reduce their balance by the value of the transaction

    const updatedAccount = this.updateAccountBalance(transaction, this.state.selectedAccount);

    let secondRequest = new Request();
    secondRequest.patch('/api/accounts/' + this.state.selectedAccount.id, updatedAccount).then(() => {
      this.getAccounts();
    });

  }


  handleCustomerEdit(customer){
    console.log(customer);
    let request = new Request();
    request.patch('/api/customers/' + this.props.customer.id, customer).then(() => {
      this.getAccounts();
    })
  }


  selectAccount(event){
    const accountFound = this.state.accounts.find(account => {
      return account._links.self.href === event.target.value
    })

    this.setState({ selectedAccount:  accountFound })
  }



  render(){
    return(
      <div>

      <AccountList accounts={this.state.accounts}/>

      <TransactionForm accounts={this.state.accounts} onSubmit={this.handleTransactionSubmit} selectAccount={this.selectAccount}/>

      <EditCustomerForm customer={this.props.customer} onSubmit={this.handleCustomerEdit}/>

      <SingleCustomer customer={this.props.customer} onSubmit={this.handleCustomerEdit}/>

      </div>
    )

  }


}

export default AccountContainer;
