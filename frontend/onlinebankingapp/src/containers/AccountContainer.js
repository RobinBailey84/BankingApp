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
      customer: props.customer,
      selectedAccount: null
    }
    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.updateAccountBalance = this.updateAccountBalance.bind(this);
    this.handleCustomerEdit = this.handleCustomerEdit.bind(this);
    this.selectAccount = this.selectAccount.bind(this);

  }

  componentDidMount(){
    this.getCustomer();
    // const url2 = '/api/customers/' + this.props.customer.id
    // let request2 = new Request()
    // request2.get(url2).then((data) => {
    //   this.setState({customer: data.customer})

  }

  getAccounts(){
    console.log(this.state.customer);
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
      this.setState({customer: data});
    }).then(() => {
      this.getAccounts()
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
      this.getCustomer();
    });

  }


  handleCustomerEdit(customer){
    let request = new Request();
    request.patch('/api/customers/' + this.props.customer.id, customer).then(() => {
      this.getCustomer();
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
      <div className="header-Logo2">
        <img src="/images/IRMLogo.png" alt="Logo"/>
        <h1>The IRM Bank</h1>

      <div className="parent-container">

        <div className="accounts">
        <AccountList accounts={this.state.accounts}/>
        </div>

        <div className="single-customer">
        <SingleCustomer customer={this.state.customer} />
        </div>

        <div className="edit-form">
        <EditCustomerForm customer={this.state.customer} onSubmit={this.handleCustomerEdit}/>
        </div>

        <div className="transaction-form">
        <TransactionForm accounts={this.state.accounts} onSubmit={this.handleTransactionSubmit} selectAccount={this.selectAccount}/>
        </div>



        </div>

      </div>

    )

  }


}

export default AccountContainer;
