import React from 'react'
import { Link } from 'react-router-dom'
import ElementListUI from './element.ui'

function ListUI(props) {

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/contact/create"}>
                    Create Contact
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Phone number</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.contacts.length > 0 && (
                                        props.contacts.map((row, key)=>(
                                            <ElementListUI key={key} elementKey={'elem' + key} row={row} deleteContact={props.deleteContact}/>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}

export default ListUI;