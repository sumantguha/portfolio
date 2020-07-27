import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import {Link, BrowserRouter} from 'react-router-dom';
import './Nav.css';

export default class PersonalNav extends Component {
  render() {
    return (
      <Navbar className='container main' variant='dark'>
        <Navbar.Brand>
          {/* Resume Button */}
          <BrowserRouter>
            <div className='container b'>
              <Link to='./assets/resume.pdf' target='_blank' download>
                <Button className='button'>Resume</Button>
              </Link>
            </div>
          </BrowserRouter>
        </Navbar.Brand>
        <Nav className='nav'>
          <Nav.Link href='/' className='link'>
            Home
          </Nav.Link>
          <Nav.Link href='/contact' className='link'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
