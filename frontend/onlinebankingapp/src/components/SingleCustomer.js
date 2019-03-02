import React from 'react';
import {Link} from 'react-router-dom';

const SingleCustomer = (props) => {

console.log(props);
  return (
    <div className="component">
    <p>Hello customer, {props.customer.name}</p>


    </div>
  )

}

export default SingleCustomer;
