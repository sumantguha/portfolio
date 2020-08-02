import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import './Projects.css';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div className='container mt-5 headingBlock'>
          <h1>Projects</h1>
        </div>

        <Container>
          <Row>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <a href='https://gitlab.cs.washington.edu/cse14x/gradeit'>
                <div className='proj'>
                  <img
                    className='pImg'
                    src={require('../images/gradeit.svg')}
                  />
                  <div className='context pl-4 pt-4'>
                    <p className='lead'>2020</p>
                    <h4>GradeIt database migration: EdStem transition</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <a href={require('../docs/nifty_web_apps.pdf')}>
                <div className='proj'>
                  <img
                    className='pImg'
                    src={require('../images/webapps.svg')}
                  />
                  <div className='context pl-4 pt-4'>
                    <p className='lead'>2020</p>
                    <h4>
                      Web App Development: Full stack homework visualization
                    </h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <a href='https://github.com/tusharpoddar/TrainThem'>
                <div className='proj'>
                  <img className='pImg' src={require('../images/tt.svg')} />
                  <div className='context pl-4 pt-4'>
                    <p className='lead'>2020</p>
                    <h4>TrainThem: HighSchool education platform</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <a href='https://huskymaps.herokuapp.com/'>
                <div className='proj'>
                  <img className='pImg' src={require('../images/maps.svg')} />
                  <div className='context pl-4 pt-4'>
                    <p className='lead'>2019 - 2020</p>
                    <h4>Husky Maps: Interactive map visualizations</h4>
                    <div className='learn mt-4 lead'>
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className='rightArrow ml-2'
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          </Row>

          <Row className='pb-5'>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <div className='proj'>
                <img className='pImg' src={require('../images/message.svg')} />
                <div className='context pl-4 pt-4'>
                  <p className='lead'>2019</p>
                  <h4>Talkly: Reactive messaging platform</h4>
                  <div className='learn mt-4 lead'>
                    Learn More
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className='rightArrow ml-2'
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} s={6} md={6} lg={6} xl={6} className='mt-5'>
              <div className='proj'>
                <img
                  className='pImg'
                  src={require('../images/insurance.svg')}
                />
                <div className='context pl-4 pt-4'>
                  <p className='lead'>2018</p>
                  <h4>Automobile Fraud Detection: Insurance analysis</h4>
                  <div className='learn mt-4 lead'>
                    Learn More
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className='rightArrow ml-2'
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
