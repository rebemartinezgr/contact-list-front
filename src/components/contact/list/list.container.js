import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import ListUI from "./list.ui"
import * as Constants from '../../constants'

function List() {

    const [contacts, setContacts] = useState({})

    useEffect(()=>{
        fetchContacts() 
    },[])

    const fetchContacts = async () => {
        await axios.get(Constants.API_ENDPOINT).then(({data})=>{
            setContacts(data.contacts)
        })
    }

    function showAlert(type, text) {
        return Swal.fire({
            text:text,
            icon:type
        })
    }

    function showConfirmationAlert(type, text, title) {
        return Swal.fire({
            title: title,
            text: text,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          })
    }

    const deleteContact = async (id) => {
        const isConfirm = await showConfirmationAlert(
            'warning',
            'You won\'t be able to revert this!',
            'Are you sure?'
        ).then((result) => {return result.isConfirmed});

        if(!isConfirm){
            return;
        }
        await axios.delete(`${Constants.API_ENDPOINT}${id}`)
        .then(({data})=> {
            showAlert("success", data.message)
            fetchContacts()
        }).catch(({response:{data}})=>{
            showAlert("error", data.message)
        })
    }

    return (
      <ListUI contacts={contacts} deleteContact={deleteContact}/>
    )
}

export default List;