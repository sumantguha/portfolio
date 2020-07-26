import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import './Experience.css';

export default class Experience extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div className='container headingBlock'>
          <h1>Experience</h1>
        </div>

        <Container>
          <Row>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <Link to='/projects/TA'>
                <div className='project'>
                  <img
                    className='pImg'
                    src={require('../images/teaching.svg')}
                  />
                  <div className='content pl-4 pt-4'>
                    <p className='lead'>2020</p>
                    <h4>CSE 14x TA | University of Washington</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <Link to='/projects/EY'>
                <div className='project'>
                  <img className='pImg' src={require('../images/ml.svg')} />
                  <div className='content pl-4 pt-4'>
                    <p className='lead'>2019</p>
                    <h4>Machine Learning Intern | Ernst & Young</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <Link to='/projects/robotics'>
                <div className='project'>
                  <img className='pImg' src={require('../images/r.svg')} />
                  <div className='content pl-4 pt-4'>
                    <p className='lead'>2018 - 2019</p>
                    <h4>Embedded Systems Tech | Husky Robotics</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            <Col xs={12} s={12} md={6} lg={6} xl={6} className='mt-5'>
              <Link to='/projects/MuSigma'>
                <div className='project'>
                  <img className='pImg' src={require('../images/data.svg')} />
                  <div className='content pl-4 pt-4'>
                    <p className='lead'>2018</p>
                    <h4>Data Analyst Intern | Mu Sigma Inc.</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
