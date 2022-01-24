import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ElementListUI(props) {

    return (
        <tr key={props.elementKey}>
            <td>{props.row.first_name}</td>
            <td>{props.row.last_name}</td>
            <td>{props.row.phone}</td>
            <td>{props.row.email}</td>
            <td>
                <Link to={`/contact/view/${props.row.id}`} className='btn btn-primary me-2'>
                    View
                </Link>
                <Link to={`/contact/edit/${props.row.id}`} className='btn btn-success me-2'>
                    Edit
                </Link>
                <Button variant="danger" onClick={()=>props.deleteContact(props.row.id)}>
                    Delete
                </Button>
            </td>
        </tr>                               
    )
}

export default ElementListUI;