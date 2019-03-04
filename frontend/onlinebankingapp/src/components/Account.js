import React from 'react';

const Account = (props) => {
  if(!props.account){
    return null;
  }

  return (
    <div className="componenet">
      <p>Account Number: {props.account.accountNumber}</p>
      <p>Sort Code: {props.account.sortCode}</p>
      <p>Account Name: {props.account.accountName}</p>
      <p>Account Type: {props.account.accountType}</p>
      <p>Interest Rate: {props.account.interestRate}</p>
      <p>Balance: {props.account.balance}</p>
      <p>Transactions: {props.transactions}</p>
    </div>
  )

}

export default Account;
