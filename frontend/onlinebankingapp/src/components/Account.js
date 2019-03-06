import React from 'react';

const Account = (props) => {
  if(!props.account){
    return null;
  }

  return (

    <div className="AccountsTransactions">
      <h4>Account Details</h4>
      <p>Account Number: {props.account.accountNumber}</p>
      <p>Sort Code: {props.account.sortCode}</p>
      <p>Account Name: {props.account.accountName}</p>
      <p>Account Type: {props.account.accountType}</p>
      <p>Interest Rate: {props.account.interestRate}</p>
      <p>Balance: {props.account.balance}</p>
      <br/>
      <h4>Transaction Details</h4>
      <p>{props.transactions}</p>
      <br/>
    </div>
  )

}

export default Account;
