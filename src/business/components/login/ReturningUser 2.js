import { useState } from 'react';


import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { handleDatabaseLogin } from '../../../services/databases/userInfo.js';

export default function ReturningUser(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const hideModal = () => props.setLoginStatus(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleDatabaseLogin(username, password);
        hideModal();
    }


    return (
        <Modal show={props.loginStatus} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className=""
                        controlId="formBasicUsername">

                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={handleUsernameChange} />
                    </Form.Group>


                    <Form.Group
                        className=""
                        controlId="formBasicPassword">

                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter password"
                            onChange={handlePasswordChange} />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit" >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    )



}