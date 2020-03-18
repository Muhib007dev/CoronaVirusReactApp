import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import LoadData from './Components/CoronaVirusDataService'
import { Jumbotron, Card } from 'react-bootstrap';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: '',
      totalcase: 0,
      countryCases: 0,
      countryNameGiven:''
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

  totalCaseHandler = (receiveData) => {
    this.setState({
      totalcase: receiveData
    })
  }

  countryCaseHandler = (receiveData,countryInputName) => {
    this.setState(
      {
        countryCases: receiveData,
        countryNameGiven: countryInputName
      }
    )
  }
  render() {
    // const {posts} = this.state
    return (
      <div style={{ textAlign: "center", alignItems:"center" }}>
        <h1>Corona Virus Tracker Application</h1>
        <p>This application lists the current number of cases reported across the globe</p>


        <Jumbotron>
          <h1>{this.state.totalcase}</h1>
          <p>
            Total cases reported as of today
          </p>
        </Jumbotron>


        <Card >
          <Card.Body>
            <Card.Title>Cases In</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{this.state.countryNameGiven}</Card.Subtitle>
            <Card.Text>
              {this.state.countryCases}
            </Card.Text>
          </Card.Body>
        </Card>

        <br></br>



        <LoadData caseData={this.totalCaseHandler} countryCaseData={this.countryCaseHandler} />


      </div>
    )
  }
}

export default App


