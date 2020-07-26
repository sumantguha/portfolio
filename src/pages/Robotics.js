import React from 'react';
import {motion} from 'framer-motion';
import 'animate.css/animate.min.css';

import './experienceIndividual.css';

export default class Robotics extends React.Component {
  render() {
    return (
      <div className='projects'>
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

        <div className='container mt-5 experienceHeading'>
          <h1>Embedded Systems Programmer</h1>
          <span>Husky Robotics</span>
          <br />
          <span className='subheading'>
            Seattle, Washington | September 2018 - June 2019
          </span>
        </div>
        <div className='container text-white info mt-5'>
          <div className='floated'>
            <img className='img' src={require('../images/husky.jpg')}></img>
          </div>
          Entering college, I joined the Husky Robotics community, whose goal is
          to bring the unreachable a little closer, aligned with my own
          interests. In a journey to create a fully funvtional Mars Rover
          prototype, I learned the value of having a tight-knit community to
          ensure the success of the team, as individuals themselves strive to
          build on their experiences and failures. As a member of the community,
          I:
          <ul>
            <li>
              Created embedded systems framework, programming microprocessor
              boards to control parts such as the chassis, arms & legs
            </li>
            <li>
              Developed movement abilities such as forward & inverse kinematics
              by integrating computer vision
            </li>
          </ul>
          This experience helped me get more comfortable to explore computing to
          try and directly better design these systems
          <ul>
            <li>
              Although I faced a steep learning curve with a high time
              commitment, and continuous pressure, I could see myself{' '}
              <strong>deliberating</strong> constantly on the practicality and
              feasibility of my ideas rather than directly jumping into trying
              new things. I learned to work within a team and with the support
              of my team, we successfully built a Mars Rover prototype for the
              university rover challenge
            </li>
            <li>
              This created opportunities to <strong>prioritize</strong> and
              better my <strong>time management</strong>: Working on high impact
              projects with faculty, teaching, backreading & taking my own
              classes all the while brought into perspective what it means for
              25+ students to rely on me. Breaking up large tasks into
              manageable bits as well as prioritizing high value tasks helped me
              be a dedicated TA and a student
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
