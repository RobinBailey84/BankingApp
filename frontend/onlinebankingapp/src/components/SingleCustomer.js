import React from 'react';


const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }

  return (
    <div className="component">
      <h4>My Details:</h4>
      <p>Name: {props.customer.name}</p>
      <p>Address: {props.customer.address} </p>
    </div>
  )

}

export default SingleCustomer;
