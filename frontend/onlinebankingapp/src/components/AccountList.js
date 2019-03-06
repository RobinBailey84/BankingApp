import React from 'react';
import Account from './Account';

const AccountList = (props) => {

  if (!props.accounts){
    return null;
  }
  const accounts = props.accounts.map((account) => {
    const transactions = account.transactions.map((transaction) => {
      return <p>{transaction.description}: £{transaction.amount} {transaction.transactionDate}</p>

    })

    return (
      <p key={account.id} className = "component-item">
      <Account account={account} transactions={transactions}/>
      </p>
    )
  }
)


  return (

    <p className="component-list">
    {accounts}
    </p>
  

  )
}

export default AccountList;
