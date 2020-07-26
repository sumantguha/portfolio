import React from 'react';
import {motion} from 'framer-motion';
import 'animate.css/animate.min.css';

import './experienceIndividual.css';

export default class EY extends React.Component {
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
          <h1>Machine Learning Intern</h1>
          <span>Ernst & Young</span>
          <br />
          <span className='subheading'>
            Bangalore, India | June 2019 - August 2019
          </span>
        </div>
        <div className='container text-white info mt-5'>
          {/* <div>
            <img className='floated' src={require('../images/TA.jpg')}></img>
          </div> */}
          Exploring this neoteric technology-oriented world, I realize the power
          of algorithmic thinking is driving society. During the summer of 2019,
          I worked at Ernst & Young, where I combined algorithms and deep
          learning to develop a full-stack Tax FAQ Bot.
          <ul>
            <li>
              Worked on building supervised machine learning models for question
              answering tasks with dual attention LSTM models
            </li>
            <li>
              Member of a team that built a deep learning tax bot to facilitate
              tax advising. Trained & developed a model to answer internal tax
              related questions
            </li>
            <li>
              Created & maintained a platform for tax analytics and
              recommendation policies
            </li>
          </ul>
          Working long days and late nights, the experience I gained over summer
          prepared and enthralled me to live in this data-centric world.
          <ul>
            <li>
              I was exposed to multiple <strong>real-world problems</strong>:
              The idea of using technnology and softare for the betterment of
              community was brought out by examining the implications software
              had on society. Seeing the positive impact for someone using
              products we wrote transformed my motivation behind building
              codebases. It showed me how problems are solved at the
              intersection of technology and people
            </li>
            <li>
              I learned what it meant to be a{' '}
              <strong>"software engineer"</strong> in a business by deploying
              software and working in tandem with multiple teams: Every commit
              had to be thoroughly checked & ready for production, every idea
              had to be brainstormed within the team. This pipeline structure
              developed my understanding of tackling large problems and making
              sure that the best version of a product is shipped out to
              consumers.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
