import UserMenu from "./UserMenu.js";
import SearchBar from "./SearchBar.js";

import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/NavBar';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';

export default function NavigationBar(props) {


    return (
        <NavBar expand={true}>
            <Container
                fluid={true}>


                <Link to="/"> <NavBar.Brand xs={2} sm={2} md={2} xl={2} xxl={2}> Logo </NavBar.Brand></Link>


                {/* <Col xs={1} sm={1} md={1} xl={1} xxl={1}></Col> */}
                <NavBar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/login">Log In / Sign Up</Nav.Link>
                        <Nav.Link href="/find">Find</Nav.Link>
                    </Nav>
                    <Col xs={6} sm={6} md={6} xl={6} xxl={6}> <SearchBar /> </Col>




                    <Col xs={2} sm={2} md={2} xl={2} xxl={2}> <UserMenu /> </Col>
                </NavBar.Collapse>


            </Container>
        </NavBar >
    )
}