import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavNew extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">CORONA-VIRUS Tracker Application</Navbar.Brand>

                    <Nav className="mr-auto">
                        <NavDropdown title="CHECK THIS OUT.............." id="collasible-nav-dropdown" variant="dark">


                            <NavDropdown.Item ><Link to='/confirmed'>1.>Is it <b>spreading</b> rapidly?<h6>Click to check</h6></Link></NavDropdown.Item>



                            <NavDropdown.Item ><Link to="/death">2.>How much it is <b>serious</b>?<h6>Click to check</h6></Link></NavDropdown.Item>



                            <NavDropdown.Item ><Link to="/recovered">3.>Can we get the situation under control?.<br></br> What Can <b>we</b> do?<h6>Click to check</h6></Link></NavDropdown.Item>


                            <NavDropdown.Divider />


                            <NavDropdown.Item><Link to="/statsofindia"><b>Status in India</b><h6>Click to check</h6></Link></NavDropdown.Item>


                        </NavDropdown>
                    </Nav>



                </Navbar>
            </div>
        )
    }
}

export default NavNew
