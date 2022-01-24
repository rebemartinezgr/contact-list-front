import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EditUI extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData()
    formData.append('first_name', this.props.firstName)
    formData.append('last_name', this.props.lastName)
    formData.append('phone', this.props.phone)
    formData.append('email', this.props.email)
    this.props.onSubmit(e, formData);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Update Contact</h4>
                <hr />
                <div className="form-wrapper">
                  {
                    Object.keys(this.props.validationError).length > 0 && (
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <ul className="mb-0">
                              {
                                Object.entries(this.props.validationError).map(([key, value])=>(
                                  <li key={key}>{value}</li>   
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  <Form onSubmit={this.handleSubmit}>
                      <Row> 
                        <Col>
                          <Form.Group controlId="firstName">
                              <Form.Label>First name</Form.Label>
                              <Form.Control 
                                  type="text" 
                                  name="firstName"       
                                  value={this.props.firstName} 
                                  required
                                  maxLength="30"
                                  onChange={this.props.onChange}
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
                                  name="lastName" 
                                  value={this.props.lastName} 
                                  required
                                  maxLength="30"
                                  onChange={this.props.onChange}
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
                                  name="phone" 
                                  value={this.props.phone} 
                                  required
                                  maxLength="16"
                                  onChange={this.props.onChange}
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
                                  name="email" 
                                  value={this.props.email}
                                  required 
                                  maxLength="50"
                                  onChange={this.props.onChange}
                              />
                          </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                      Update
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditUI;