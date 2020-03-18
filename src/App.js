import React, { Component } from 'react'
import './App.css';
import CompToLoadConfirmed from './Components/CompToLoadConfirmed'
import CompToLoadRecovered from './Components/CompToLoadRecovered';
import CompToLoadDeath from './Components/CompToLoadDeath';
import NavNew from './Components/NavNew';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import StatsOfIndia from './Components/StatsOfIndia';




class App extends Component {


  render() {

    return (

      <Router>
      
      <div>

          <NavNew />
          <Switch>


            <Route path="/" exact component={CompToLoadConfirmed} />

          <Route path="/confirmed" component={CompToLoadConfirmed}/> 

          <Route path="/recovered" component={CompToLoadRecovered}/>

          <Route path="/death" component={CompToLoadDeath}/>

          <Route path="/statsofindia" component={StatsOfIndia}/>

          </Switch>

      </div>

      </Router>


    )
  }
}

export default App


