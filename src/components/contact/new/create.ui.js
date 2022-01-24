import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CreateUI(props) {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const formData = new FormData()

  formData.append('first_name', firstName)
  formData.append('last_name', lastName)
  formData.append('phone', phone)
  formData.append('email', email)

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Contact</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(props.validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(props.validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={(event)=> props.createContact(event, formData)}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={props.firstName} 
                                required
                                maxLength="30"
                                onChange={(event)=>{
                                    setFirstName(event.target.value)
                                }}
                            />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={props.lastName} 
                                required
                                maxLength="30"
                                onChange={(event)=>{
                                    setLastName(event.target.value)
                                }}
                            />
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={props.phone} 
                                required
                                maxLength="16"
                                onChange={(event)=>{
                                    setPhone(event.target.value)
                                }}
                            />
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={props.email}
                                required 
                                maxLength="50"
                                onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}
                            />
                        </Form.Group>
                      </Col>
                  </Row>
                  
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">Save</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}