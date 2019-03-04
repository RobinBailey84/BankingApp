import React from 'react';

const Transaction = (props) => {
  if(!props.transaction){
    return null;
  }

  return (
    <div className="componenet">
      <p>Amount: {props.transaction.amount}</p>
      <p>Description: {props.transaction.description}</p>
      <p>Date: {props.transaction.transactionDate}</p>
    </div>
  )

}

export default Transaction;
