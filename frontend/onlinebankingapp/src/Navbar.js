import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/customers/accounts/" + {props.customer.id}>`Accounts`</Link>
        </li>
        <li className="navLink">
        <Link to="/pirates/new">Add a Pirate</Link>
        </li>
        <li className="navLink">
          <Link to="/ships">Ships</Link>
        </li>
        <li className="navLink">
          <Link to="/raids" >Raids</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
