import React from 'react';

const Account = (props) => {
  if(!props.account){
    return null;
  }

  return (

    <div className="AccountsTransactions">
      <h4>Account Details</h4>
      <div>
      <table>
      <tr>Account Number:{props.account.accountNumber}</tr>
      <tr>Sort Code:{props.account.sortCode}</tr>
      <tr>Account Name: {props.account.accountName}</tr>
      <tr>Account Type: {props.account.accountType}</tr>
      <tr>Interest Rate: {props.account.interestRate}</tr>
      <tr>Balance: {props.account.balance}</tr>
      <br/>
      </table>
      </div>
      <h4>Transaction Details</h4>
      <p>{props.transactions}</p>

      <br/>
    </div>

  )

}

export default Account;
