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
          <h1>Data Analyst Intern</h1>
          <span>Mu Sigma</span>
          <br />
          <span className='subheading'>
            Bangalore, India | June 2018 - September 2018
          </span>
        </div>
        <div className='container text-white info mt-5'>
          {/* <div className='floated'>
            <img className='img' src={require('../images/husky.jpg')}></img>
          </div> */}
          Through highschool I lived in the sprawling metropolis of Bangalore,
          India, which has grown over 40% in the last decade and is now
          considered the silicon valley of India. Originally named the garden
          city, the area was filled with pensioners and retired homes but the IT
          boom has made it the supergiant that it is now. Bangalore has been
          chasing growth, focusing on the end rather than as a means to an end,
          and this has created a plethora of problems like housing, population
          explosion, traffic and water pollution. Moreover just like those of
          the companies, there are no standard solution to these problems and
          hence organizations need to start challenging conventional thought. I
          got exposed to problem solving in an innovative approach during my
          summer internship at Mu Sigma, one of the world’s largest pure play
          decision sciences companies. Working on solving these problems bit by
          bit, I built a classification model to detect automobile insurance
          fraud with 85% accuracy that was predicted to generate a $2M increase
          in annual revenue. What I learnt beyond solving specific problems is
          the Art of problem solving under 3 guiding principles viz.
          <ul>
            <li>
              <strong> Learning is more critical than knowing</strong>: I had
              very little contact with computing and data science going into Mu
              Sigma, but I got more from this experience than any other
              internship, because it started me on a path to computing.
            </li>
            <li>
              <strong>The new IP is interdisciplinary perspective</strong>:
              Getting into this totally new domain, synthesizing data and
              information was paramount. This forced me to look at a
              multidisciplinary form of learning and bear these different
              insights to examine complex problems
            </li>
            <li>
              <strong>Questions are more important than answers</strong>: This
              foundational principle shapes the programmer I am today. Coming
              from an engineering background, I was always taught to ask
              questions and work through them to figure out my own answer.
              Google is at a fingertip in this data centric world, but the
              reward of coming to a solution in my own way has always been the
              biggest gift
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
