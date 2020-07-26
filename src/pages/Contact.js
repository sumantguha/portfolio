import React from 'react';
import {Form, Col, Container, Button} from 'react-bootstrap';
import {motion} from 'framer-motion';
import 'animate.css/animate.min.css';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='container'>
          <motion.div
            drag
            whileHover={{scale: 1.2}}
            className='circle1'></motion.div>
          <motion.div
            drag
            whileHover={{scale: 1.2}}
            className='circle2'></motion.div>
          <motion.div
            drag
            whileHover={{scale: 1.2}}
            className='circle3'></motion.div>

          <div className='container mt-5 head'>
            <h1>Get in touch</h1>
            <p className='mt-4'>
              Got a project? Drop me a line if you want to work together on
              something :)
            </p>
          </div>

          <Container>
            <div className='social mt-5'>
              <motion.div whileTap={{scale: 1.1}}>
                <a
                  target='_blank'
                  href='https://www.facebook.com/sumant.guha.1'>
                  <FontAwesomeIcon icon={faFacebook} className='iconA' />
                </a>
              </motion.div>{' '}
              <motion.div whileTap={{scale: 1.1}}>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/sumantguha99'>
                  <FontAwesomeIcon icon={faLinkedin} className='iconA ml-5' />
                </a>
              </motion.div>
              <motion.div whileTap={{scale: 1.1}}>
                <a target='_blank' href='https://github.com/sumantguha'>
                  <FontAwesomeIcon icon={faGithub} className='iconA ml-5' />
                </a>
              </motion.div>
              <motion.div whileTap={{scale: 1.1}}>
                <a href={'mailto:guhas2@uw.edu'}>
                  <FontAwesomeIcon icon={faEnvelope} className='iconA ml-5' />
                </a>
              </motion.div>
            </div>

            <div className='contactInfo text-muted'>
              E:{' '}
              <a href='mailto:guhas2@uw.edu' className='text-white'>
                <strong>guhas2</strong> at uw edu
              </a>
              <br />
              P: <span className='text-white'>+1 (253) 355 7730</span>
            </div>

            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label className='text-white'>Name</Form.Label>
                  <Form.Control type='text' placeholder="What's your name?" />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder="What's your email address?"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridAddress1'>
                <Form.Label className='text-white'>Project</Form.Label>
                <Form.Control placeholder="What's your project idea?" />
              </Form.Group>

              <Button variant='danger' type='submit'>
                Submit
              </Button>
            </Form>
          </Container>

          <Container className='footer text-white'>
            <p>Crafted @ Seattle by Sumant Guha</p>
          </Container>
        </div>
      </div>
    );
  }
}
