import React from 'react';
import {Link} from 'react-router-dom';


const SingleCustomer = (props) => {

console.log(props)

  const accounts = props.customer.accounts.map((account, index) => {
    return (
      <div key={account.id}>
      <p>Account Type: {account.accountType}</p>
      <p>Account Number: {account.accountNumber}</p>
      <p>Sort Code: {account.sortCode}</p>
      <p>Balance: {account.balance}</p>
      </div>
    )
  })



  return (
    <div className="component">
      <p>Name: {props.customer.name}</p>
      <p>Accounts: </p>
      {accounts}
    </div>
  )

}

export default SingleCustomer;
