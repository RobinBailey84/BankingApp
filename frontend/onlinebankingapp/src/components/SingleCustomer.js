import React from 'react';
import {Link} from 'react-router-dom';

const SingleCustomer = (props) => {


  return (
    <div className="component">
    <p>Hello, {props.customer.name}</p>


    </div>
  )

}

export default SingleCustomer;
