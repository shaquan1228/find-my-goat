//https://stackoverflow.com/questions/38678255/react-redux-component-does-not-rerender-on-store-state-change
import { connect } from 'react-redux';
import store from "../../../config/store";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown'

function UserMenu(props) {

    const handleLogout = () => store.dispatch({ type: 'log out' })

    return (
        <Container>

            <Row className="align-items-center">

                <Col xs={7} md={6}>
                    {props.loggedIn && ('Welcome, ' + props.username)}
                </Col>
                <Col xs={5} md={6}>

                    {props.loggedIn && (
                        <NavDropdown
                            title={
                                <Image
                                    rounded={true}
                                    thumbnail={true}

                                    src={props.aviURL} />
                            }>

                            <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    )}


                </Col>
            </Row>
        </Container>

    )
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn, username: state.username, aviURL: state.aviURL })



export default connect(mapStateToProps)(UserMenu)