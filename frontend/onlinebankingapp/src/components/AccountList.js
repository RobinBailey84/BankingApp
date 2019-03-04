import React from 'react';
import Account from './Account';

const AccountList = (props) => {

  if (!props.accounts){
    return null;
  }
  const accounts = props.accounts.map((account, index) => {
    return (
      <option value={index} key={index}>{account.accountType}</option>

    )
  })

  return (
    <ul className="component-list">
      {accounts}
    </ul>
  )
}

export default AccountList;
