import React from 'react';

const Account = (props) => {
  if(!props.account){
    return null;
  }

  return (
    <div className="componenet">
      <p>Account Number: {props.account.accountNumber}</p>
      <p>Sort Code: {props.account.sortCode}</p>
      <p>Account Name: {props.accountName}</p>
      <p>Account Type: {props.accountType}</p>
      <p>Interest Rate: {props.interestRate}</p>
      <p>Balance: {props.balance}</p>
      <p>Transactions: </p>
    </div>
  )

}

export default Account;
