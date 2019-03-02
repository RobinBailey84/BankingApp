import React from 'react';
import {Link} from 'react-router-dom';

const SingleCustomer = (props) => {

console.log(props);
  return (
    <div className="component">
    <p>Name: {props.customer.name}</p>
    <p>Address: {props.customer.address}</p>
    <p>Salary: {props.customer.salary}</p>


    </div>
  )

}

export default SingleCustomer;
