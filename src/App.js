import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import PersonalNav from './pages/Nav';
import Contact from './pages/Contact';
import TA from './pages/TA';
import EY from './pages/EY';
import Robotics from './pages/Robotics';
import MuSigma from './pages/MuSigma';
import Loading from './pages/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({loaded: true});
  //   }, 3000);
  // }

  render() {
    if (!this.state.loaded) {
      setInterval(() => {
        this.setState({loaded: true});
      }, 3000);
      return (
        <Router>
          <Route path='/' exact component={Loading} />
        </Router>
      );
    }

    return (
      <Router>
        <div className='App'>
          <div>
            <PersonalNav />
            <Switch>
              <Route path='/' exact component={Landing} />
              <Route path='/contact' component={Contact} />
              <Route path='/projects/TA' component={TA} />
              <Route path='/projects/EY' component={EY} />
              <Route path='/projects/robotics' component={Robotics} />
              <Route path='/projects/MuSigma' component={MuSigma} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
