import { useEffect } from 'react';
//https://stackoverflow.com/questions/38678255/react-redux-component-does-not-rerender-on-store-state-change
import { useSelector, useDispatch } from 'react-redux';
import useLocalStorage from '../../../services/hooks/useLocalStorage.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown'

function UserMenu(props) {
    props = useSelector((state) => ({ loggedIn: state.loggedIn, username: state.username, aviURL: state.aviURL }))
    console.log(props.aviURL)
    const dispatch = useDispatch();
    const handleLogout = () => dispatch({ type: 'log out' });


    return (
        <Container>

            <Row className="align-items-center">

                <Col xs={4} md={6}>
                    {props.loggedIn === true && ('Welcome, ' + props.username)}
                </Col>
                <Col xs={8} md={6}>

                    {props.loggedIn === true && (
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


export default UserMenu;