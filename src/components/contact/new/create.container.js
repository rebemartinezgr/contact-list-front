import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import CreateUI  from './create.ui'
import * as Constants from '../../constants'

function CreateContact() {

  const navigate = useNavigate();
  const [validationError,setValidationError] = useState({})
  
  const createContact = async (e, formData) => {
    e.preventDefault();
    await axios.post(Constants.API_ENDPOINT, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <CreateUI validationError={validationError} createContact={createContact}/>
  )
}

export default CreateContact;