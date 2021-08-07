import React,{useState,useContext} from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import UserContext from '../store/user-context';

function SignUp() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordVerify,setPasswordVerify]=useState('');


    const history = useHistory();

    const currentUser = useContext(UserContext);

    const {getLoggedIn } = currentUser;

    async function signUpFormHandler(e) {
        e.preventDefault();

        const newUserData = {
            email,
            password,
            passwordVerify
        }

        const res = await axios.post('/register', newUserData);
        console.log(res);
        getLoggedIn();
        console.log("Registered Successfully");
        history.push('/allproducts')
    }


    return (
        <Row style={{marginBottom:'9.7rem',marginTop:'9rem'}}>
            <Col lg={3}></Col>
            <Col lg={6}>
                    <Form onSubmit={signUpFormHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e)=>setPasswordVerify(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col lg={3}></Col>
        </Row>

        
    )
}

export default SignUp;
