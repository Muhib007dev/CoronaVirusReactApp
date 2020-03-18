import React, { Component } from 'react'
import '../App.css';
import { Jumbotron, Card } from 'react-bootstrap';
import CoronaVirusDataServiceRecovered from './CoronaVirusDataServiceRecovered';


class CompToLoadRecovered extends Component {
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
                <div style={{ color: "green" }}>
                <b><h1>Yes. These numbers can be increased.</h1>
                <p>By staying at the home if you are not infected. And if suspected then don't run away from the hospital.(No, I am not kidding this is actually happening)</p>
                    </b> </div>
            <br></br>

                <Jumbotron>
                    <h1 style={{color:"Green"}}>{this.state.totalcase}</h1>
                    <p style={{color:"Green"}}>
                        Cases Recovered as of today
          </p>
                </Jumbotron>


                <Card >
                    <Card.Body>
                        <Card.Title>Recovered In</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.countryNameGiven}</Card.Subtitle>
                        <Card.Text>
                            {this.state.countryCases}
                        </Card.Text>
                        <Card.Title>Recovered since last day</Card.Title>

                        <Card.Text>
                            {this.state.countryCases - this.state.countryCases2}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <br></br>



                <CoronaVirusDataServiceRecovered caseData={this.totalCaseHandler} countryCaseData={this.countryCaseHandler} />



            </div>
        )
    }
}

export default CompToLoadRecovered
