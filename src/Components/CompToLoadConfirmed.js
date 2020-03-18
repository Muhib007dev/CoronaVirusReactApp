import React, { Component } from 'react'
import '../App.css';
import LoadData from './CoronaVirusDataService'
import { Jumbotron, Card } from 'react-bootstrap';


class CompToLoadConfirmed extends Component {
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
                <div style={{color:"red"}}>
                <h1>Corona Virus spreading rapidly</h1>
                <p> As the figure shows below. This application lists the current number of cases reported across the globe</p>
                </div>
<br></br>
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
                        <Card.Title>Changes since last day</Card.Title>

                        <Card.Text>
                            {this.state.countryCases - this.state.countryCases2}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <br></br>



                <LoadData caseData={this.totalCaseHandler} countryCaseData={this.countryCaseHandler} />



            </div>
        )
    }
}

export default CompToLoadConfirmed
