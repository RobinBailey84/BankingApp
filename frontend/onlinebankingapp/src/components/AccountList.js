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
//
// const transactions = props.accounts.map((account) => {
//       const transactions = account.transactions.map((transaction) => {
//         console.log(transaction)
//         return (
//           <li key ={transaction.id} className= "component-item">
//           <Transaction transaction={transaction}/>
//           </li>
//         )
//       }
//     )
//   }
// )


  return (
    <ul className="component-list">
    {accounts}
    </ul>
  )
}

export default AccountList;
