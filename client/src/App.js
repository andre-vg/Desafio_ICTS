import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import Insert from "./rotas/Insert";
import Drop from "./rotas/Drop";
import Read from "./rotas/Read";
import Update from "./rotas/Update";
import InsertCompra from "./compra/InsertCompra";
import ReadCompra from "./compra/ReadCompra";
import UpdateCompra from "./compra/UpdateCompra";
import DropCompra from "./compra/DropCompra";
import './components/compras.css';

function App() {
  return (
    <Router>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <div className="App">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Produto"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/Insert">Create</NavDropdown.Item>
                  <NavDropdown.Item href="/Read">Read</NavDropdown.Item>
                  <NavDropdown.Item href="/Update">Update</NavDropdown.Item>
                  <NavDropdown.Item href="/Drop">Delete</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Compra"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/InsertCompra">
                    Create
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ReadCompra">Read</NavDropdown.Item>
                  <NavDropdown.Item href="/UpdateCompra">
                    Update
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/DropCompra">Delete</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/insert" element={<Insert />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/ReadCompra" element={<ReadCompra />} />
          <Route path="/UpdateCompra" element={<UpdateCompra />} />
          <Route path="/DropCompra" element={<DropCompra />} />
          <Route path="/InsertCompra" element={<InsertCompra />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
