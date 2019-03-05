import React from 'react';

const Transaction = (props) => {
  if(!props.transaction){
    return null;
  }

  return (
    <div className="component">
      <h5>Amount: {props.transaction.amount}</h5>
      <h5>Description: {props.transaction.description}</h5>
      <h5>Date: {props.transaction.transactionDate}</h5>
    </div>
  )

}

export default Transaction;
