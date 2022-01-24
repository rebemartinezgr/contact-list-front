import React from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import EditUI from './edit.ui';
import withRouter from '../../withRouter';
import * as Constants from '../../constants'

class EditContact extends React.Component {

  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      validationError: {}
    };
  }

  componentDidMount() {
    this.fetchContact(this.props.params.id);
  }

  fetchContact = async (id) => {
    await axios.get(`${Constants.API_ENDPOINT}${this.props.params.id}`).then(({data})=>{
        this.setState({firstName: data.contacts.first_name});
        this.setState({lastName: data.contacts.last_name});
        this.setState({email: data.contacts.email});
        this.setState({phone: data.contacts.phone});
    }).catch(({response})=>{
        let msg = ''
        if(response.status===404){
            msg = "Contact does not exist."
        }else{
            msg = response.data.message
        }
        Swal.fire({
            text:msg,
            icon:"error"
        })
        this.props.navigate("/")
    })
  }

  handleValueChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  updateContact = async (e, formData) => {
    e.preventDefault();
    formData.append('_method', 'PUT');
    await axios.post(`${Constants.API_ENDPOINT}${this.props.params.id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      this.props.navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        this.setState({validationError: response.data.errors});
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phone = this.state.phone;
    const validationError = this.state.validationError;
    return (
      <EditUI
      firstName={firstName}
      lastName={lastName}
      email={email} 
      phone={phone}
      onChange={this.handleValueChange}
      onSubmit={this.updateContact}
      validationError={validationError}
      />
    );
  }
}
export default withRouter(EditContact);