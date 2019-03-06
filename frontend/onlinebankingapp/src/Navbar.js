import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      
        <li className="navLink">
          <Link to="/customers/accounts/">Accounts</Link>


        </li>

      </ul>
    </header>
  )
}

export default NavBar;
