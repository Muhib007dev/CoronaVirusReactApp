import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import LoadData from './Components/CoronaVirusDataService'
import { Jumbotron, Form, Col } from 'react-bootstrap';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: '',
      totalcase: 0,
      countryCases: 0
    }
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv')
      .then(response => {

        this.setState({
          posts: response
        })
      })
      .catch(error => {
      })
  }

  totalCaseHandler = (receiveData, receiveData2) => {
    this.setState({
      totalcase: receiveData,
      countryCases: receiveData2
    })
  }

  render() {
    // const {posts} = this.state
    return (
      <div>
        <h1>Corona Virus Tracker Application</h1>
        <p>This application lists the current number of cases reported across the globe</p>


        <Jumbotron>
          <h1>{this.state.totalcase}</h1>
          <p>
            Total cases reported as of today
          </p>
        </Jumbotron>











        {this.state.countryCases}

        <LoadData caseData={this.totalCaseHandler} />


      </div>
    )
  }
}

export default App


