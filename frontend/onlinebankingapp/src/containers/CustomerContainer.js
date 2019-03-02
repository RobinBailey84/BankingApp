import React, {Component} from 'react';
import SingleCustomer from '../components/SingleCustomer';
import Request from './../helpers/request';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customer: []}
  }

  componentDidMount(){
    const request = new Request()
    const url = '/api/customers' + this.props.id
    request.get(url).then((data) => {
      this.setState({customers: data})
    })
  }

  render(){
    return(
      <SingleCustomer customer={this.state.customer} />
    )
  }
}

export default CustomerContainer;
