import React from 'react';

const EditCustomerForm = (props) => {
  if(!props.customer){
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = {
      "name": event.target.name.value,
      "address": event.target.address.value,
      "salary": event.target.salary.value,
      "password":event.target.password.value
    }
    console.log(customer);
    props.onSubmit(customer);
  }

  return (
    <div className = "edit-details">
    <h4>Edit Details</h4>
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="name"/>
    <input type="text" name="address" placeholder="address"/>
    <input type="number" name="salary" placeholder="salary"/>
    <input type="password" name="password" placeholder="password"/>
    <button type="submit">Save</button>
    </form>

    </div>
  )

}
export default EditCustomerForm;
