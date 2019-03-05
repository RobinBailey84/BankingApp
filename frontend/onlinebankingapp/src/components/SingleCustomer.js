import React from 'react';
import {Link} from 'react-router-dom';


const SingleCustomer = (props) => {

console.log(props)
  if(!props.customer){
    return null;
  }

  return (
    <div className="component">
      <p>Name: {props.customer.name}</p>
      <p>Address: {props.customer.address} </p>
    </div>
  )

}

export default SingleCustomer;
