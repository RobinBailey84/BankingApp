import React from 'react';

const Account = (props) => {
  if(!props.account){
    return null;
  }

  return (

    <div className="AccountsTransactions">
      <h5>Account Number: {props.account.accountNumber}</h5>
      <h5>Sort Code: {props.account.sortCode}</h5>
      <h5>Account Name: {props.account.accountName}</h5>
      <h5>Account Type: {props.account.accountType}</h5>
      <h5>Interest Rate: {props.account.interestRate}</h5>
      <h5>Balance: {props.account.balance}</h5>
      <br/>
      <h5>Transactions: {props.transactions}</h5>

    </div>
  )

}

export default Account;
