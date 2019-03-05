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
      <p key={account.id} className = "component-item">
      <Account account={account} transactions={transactions}/>
      </p>
    )
  }
)


  return (
    <div className="Header-Logo2">
    <img src="/images/IRMLogo.png" alt="Logo"/>
      <h1>The IRM Bank</h1>
    <p className="component-list">
    {accounts}
    </p>
    </div>

  )
}

export default AccountList;
