import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditContact from "./components/contact/edit/edit.container";
import ContactList from "./components/contact/list/list.container";
import CreateContact from "./components/contact/new/create.container";
import ViewContact from "./components/contact/view/view.container";

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">Contact manager</Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/contact/create" element={<CreateContact />} />
            <Route path="/contact/edit/:id" element={<EditContact />}/>
            <Route path="/contact/view/:id" element={<ViewContact />} />
            <Route exact path='/' element={<ContactList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
