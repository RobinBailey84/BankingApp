import React from 'react';
import Account from './Account';
import Transaction from './Transaction';

const AccountList = (props) => {

  if (!props.accounts){
    return null;
  }
  const accounts = props.accounts.map((account) => {
    const transactions = account.transactions.map((transaction) => {
      return <p>{transaction.description}: £{transaction.amount} {transaction.transactionDate}</p>

    })

    return (
      <li key={account.id} className = "component-item">
      <Account account={account} transactions={transactions}/>
      </li>
    )
  }
)


  return (
    <div>
    <ul className="component-list">
    {accounts}
    </ul>
    </div>

  )
}

export default AccountList;
