import React, { Component } from 'react'
import { readRemoteFile as ReadRemoteFile } from 'react-papaparse'
import { Form, Table, Button } from 'react-bootstrap'


const url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv'


class CoronaVirusDataServiceRecovered extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newResults: [],
            arrOfCases: [],
            countryInput: "",
        }

    }

    date = new Date();
    oldDate = new Date();
    newdate = null;
    oldDateRef = null;
    newArrayList = [];



    componentDidMount() {
        ReadRemoteFile(
            url,
            {
                complete: (results) => {
                    this.setState({
                        newResults: results
                    }, () => {
                        this.state.newResults.data ? this.newArrayList = this.state.newResults.data : this.newArrayList = []


                        this.props.caseData(this.totalFun())
                    })
                },
                header: true,
            }
        )
        this.date.setDate(this.date.getDate() - 2);

        let newDt = this.date.toLocaleDateString('en-GB');

        let datearray = newDt.split("/");

        let newdate = datearray[1] + '/' + (datearray[0]) + '/' + 20;

        newdate = newdate.replace(/\b0/g, '');

        console.log(this.newdate = newdate);


        //make a diff
        this.oldDate.setDate(this.oldDate.getDate() - 3);

        let oldDt = this.oldDate.toLocaleString('en-GB');

        let oldDateArr = oldDt.split("/");

        let oldDateIs = oldDateArr[1] + '/' + oldDateArr[0] + '/' + 20;

        oldDateIs = oldDateIs.replace(/\b0/g, '');

        this.oldDateRef = oldDateIs;

        console.log(this.oldDateRef)

    }

    caseUpdate

    total = 0;
    totalFun = () => {
        this.newArrayList.map((check, index) => (check[this.newdate] ? (this.total = this.total + parseInt(check[this.newdate])) : "undefined"))
        return this.total
    }

    countryDatacheck = 0;
    checkCountry = (testing) => {
        this.newArrayList.map((check, index) => (check["Country/Region"] === testing ? (this.countryDatacheck = this.countryDatacheck + parseInt(check[this.newdate])) : "undefined"))

        return this.countryDatacheck
    }


    countryDatacheck1 = 0;
    checkCountry1 = (testing) => {
        this.newArrayList.map((check, index) => (check["Country/Region"] === testing ? (this.countryDatacheck1 = this.countryDatacheck1 + parseInt(check[this.oldDateRef])) : "undefined"))

        return this.countryDatacheck1
    }

    // newArray = [];
    // // newArray = this.state.newResults.data;


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.countryCaseData(this.checkCountry(this.state.countryInput), this.state.countryInput, this.checkCountry1(this.state.countryInput))
        this.countryDatacheck = 0;
        this.countryDatacheck1 = 0;
    }





    render() {
        // let dataCheck = null;




        return (
            <>



                <Form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
                    <Form.Group >
                        <Form.Control style={{ textAlign: "center" }} type="text" placeholder="Enter Country Name(Case Sensitive)" name="countryInput" value={this.state.countryInput} onChange={this.changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Check Total Cases
                    </Button>

                </Form>

                <br></br>


                <Table striped bordered hover responsive variant>

                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>State</th>
                            <th>Total Recovered</th>
                            <th>Recovered since last day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.newArrayList.map((countryList, index) =>
                            <tr key={index}>
                                <td>{countryList["Country/Region"] ? <p key={index}>{countryList["Country/Region"]}</p> : "undefined"}</td>
                                <td>{countryList["Province/State"] ? <p key={index}>{countryList["Province/State"]}</p> : "undefined"}</td>
                                <td>{countryList[this.newdate] ? <p key={index}>{countryList[this.newdate]}</p> : "undefined"}</td>
                                <td>{countryList[this.newdate] ? <p>{(countryList[this.newdate] - countryList[this.oldDateRef])}</p> : "undefined"}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {/* 
                <Country countryList={this.newArrayList.map((countryListNew, index) => {
                    return (
                        countryListNew["Country/Region"] ? <p key={index}>{countryListNew["Country/Region"]}</p> : "undefined"
                    )
                })} />

                <State stateList={this.newArrayList.map((stateListNew, index) => {
                    return (
                        stateListNew["Province/State"] ? <p key={index}>{stateListNew["Province/State"]}</p> : console.log("asdf")
                    )
                })} />


                <LatestTotalCases cases={this.newArrayList.map((check, index) => {
                    return (check[this.newdate] ? <p key={index}>{check[this.newdate]}</p> : console.log(dataCheck = "Undefined") + "un")
                })} />

                {dataCheck === "Undefined" ? <UpdateInProgress /> : ""} */}




            </>
        )
    }
}
export default CoronaVirusDataServiceRecovered
