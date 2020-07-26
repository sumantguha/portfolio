import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Landing.css';
import Experience from './Experience';
import Projects from './Projects';
import {motion} from 'framer-motion';
import 'animate.css/animate.min.css';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
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

        {/* Left Section */}
        <div className='left'>
          {/* Header Block */}

          <motion.div
            className='container headingBlock'
            initial={{y: '-100vh'}}
            animate={{y: 0}}
            transition={{duration: 0.5}}>
            <h1>Sumant Guha</h1>
            <span>Exploring the unkown</span>
            <p className='mt-4'>
              Hello, World! I'm Sumant, a student studying electrical and
              computer engineering at the University of Washington, Seattle.
              Passionate about promoting inclusive education and computational
              literacy, I love to create, experiement with and develop content
              for the internet world. I design web products and apps that
              provide modern interfaces in harmony with sleek and efficient
              backends.
            </p>
            <div className='buttons mt-5'>
              <motion.div whileTap={{scale: 1.1}}>
                <a
                  target='_blank'
                  href='https://www.facebook.com/sumant.guha.1'>
                  <FontAwesomeIcon icon={faFacebook} className='icon ml-5' />
                </a>
              </motion.div>{' '}
              <motion.div whileTap={{scale: 1.1}}>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/sumantguha99'>
                  <FontAwesomeIcon icon={faLinkedin} className='icon ml-5' />
                </a>
              </motion.div>
              <motion.div whileTap={{scale: 1.1}}>
                <a target='_blank' href='https://github.com/sumantguha'>
                  <FontAwesomeIcon icon={faGithub} className='icon ml-5' />
                </a>
              </motion.div>
              <motion.div whileTap={{scale: 1.1}}>
                <a href={'mailto:guhas2@uw.edu'}>
                  <FontAwesomeIcon icon={faEnvelope} className='icon ml-5' />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        {/* <ScrollAnimation>
                  <div className='me'>
                  <img src={require('../images/me.png')} />
                  </div>
            </ScrollAnimation> */}

        <div className='me'>
          <img src={require('../images/me.png')} />
        </div>

        <Experience />

        <Projects />
      </div>
    );
  }
}
