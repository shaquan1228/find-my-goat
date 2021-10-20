import { useState } from 'react';

import ReturningUser from '../components/login/ReturningUser.js';
import JoiningUser from '../components/login/JoiningUser.js';

import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Login() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState(false);

    const handleLoginStatusChange = (e) => setLoginStatus(true);
    const handleSignUpStatusChange = (e) => setSignUpStatus(true);


    return (
        <Container fluid={true}>
            <Col>
                <Stack
                    gap={2}
                    className="login-page align-items-center">

                    <Button
                        className="row-1"
                        variant="primary"
                        type="button"
                        onClick={handleLoginStatusChange}>
                        Log In
                    </Button>



                    <Button
                        className="row-2"
                        variant="primary"
                        type="button"
                        onClick={handleSignUpStatusChange}>
                        Sign Up
                    </Button>

                    {/* TODO: ADd feedback for users who are logged in. wrap 44 and 45 in ternary checking if user is logged in */}
                    {loginStatus && <ReturningUser loginStatus={loginStatus} setLoginStatus={setLoginStatus} />}
                    {signUpStatus && <JoiningUser signUpStatus={signUpStatus} setSignUpStatus={setSignUpStatus} />}

                </Stack>

            </Col>
        </Container>

    );
}
