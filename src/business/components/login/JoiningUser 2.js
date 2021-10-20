import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { handleCreateDatabaseAccount } from '../../../services/databases/userInfo';

export default function ReturningUser(props) {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value);

    const hideModal = () => props.setSignUpStatus(false);
    //TODO: Handle data validation and frontend response: 
    //Set form.control isInvalid value to true.
    //https://stackoverflow.com/questions/60896210/how-do-i-make-my-react-bootstrap-4-validation-error-visible
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateDatabaseAccount(email, username, password, passwordConfirmation);
    }




    return (
        <Modal show={props.signUpStatus} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className=""
                        controlId="formBasicEmail">

                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={handleEmailChange} />
                    </Form.Group>

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

                    <Form.Group
                        className=""
                        controlId="formBasicPasswordConfirmation">

                        <Form.Label>Reenter Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter password"
                            onChange={handlePasswordConfirmationChange} />
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