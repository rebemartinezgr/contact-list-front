import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import ViewUI from './view.ui'
import * as Constants from '../../constants'

function ViewContact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState({})
  const [history, setHistory] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    const fetchContact = async () => {
      await axios.get(`${Constants.API_ENDPOINT}${id}`).then(({data})=>{
        setHistory(data.contacts.history)
        setContact(data.contacts)
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
          navigate("/")
      })
    }
    fetchContact() 
  },[])

  

  return (
    <ViewUI contact={contact} history={history}/>
  )
}
export default ViewContact;