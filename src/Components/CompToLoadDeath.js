import React, { Component } from 'react'
import '../App.css';
import { Jumbotron, Card } from 'react-bootstrap';
import CoronaVirusDataServiceDeath from './CoronaVirusDataServiceDeath';

class CompToLoadDeath extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: '',
            totalcase: 0,
            countryCases: 0,
            countryNameGiven: '',
            countryCases2: 0
        }
    }


    totalCaseHandler = (receiveData) => {
        this.setState({
            totalcase: receiveData
        })
    }

    countryCaseHandler = (receiveData, countryInputName, receiveData2) => {
        this.setState(
            {
                countryCases: receiveData,
                countryNameGiven: countryInputName,
                countryCases2: receiveData2
            }
        )
    }
    render() {
        // const {posts} = this.state
        return (
            <div style={{ textAlign: "center", alignItems: "center" }}>
                <br></br>
                <div style={{ color: "red" }}>
                <h1>Its actully serious!</h1>
                <h2>As we can see the figues below.</h2>
                </div>
                <br></br>

                <Jumbotron>
                    <h1 style={{color:"red"}}>{this.state.totalcase}</h1>
                    <p style={{ color: "red" }}>
                        Total death cases reported uptil now.
          </p>
                </Jumbotron>


                <Card >
                    <Card.Body>
                        <Card.Title>Death cases In</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.countryNameGiven}</Card.Subtitle>
                        <Card.Text>
                            {this.state.countryCases}
                        </Card.Text>
                        <Card.Title>Changes since last day</Card.Title>

                        <Card.Text>
                            {this.state.countryCases - this.state.countryCases2}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <br></br>



                <CoronaVirusDataServiceDeath caseData={this.totalCaseHandler} countryCaseData={this.countryCaseHandler} />



            </div>
        )
    }
}

export default CompToLoadDeath
