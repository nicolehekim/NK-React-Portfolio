import React, {useState} from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import '../assets/Contact.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameErr, setNameErr] = useState('false');
    const [emailErr, setEmailErr] = useState('false');
    const [messageErr, setMessageErr] = useState('false');
    const [sent, setSent] = useState('false');

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameErr(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErr(false);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageErr(false);
    };

    const validateEmail = (email) => {
        e.preventDefault();
        let valid = true;

        if (name.length <= 2) {
            setNameErr(true);
            valid = false;
        }

        if (!validateEmail(email)) {
            setEmailErr(true);
            valid = true;
        }

        if (message.length < 120) {
            setMessageErr(true);
            valid = false;
        }

        if (valid) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName('');
            setEmail('');
            setMessage('');
            setSent('');
        }
    };

    return (
        <section>
            <Container fluid>
                <Row>
                    <Col lg={8}>
                        <h3 className='justify-content-center text-center text-light mt-3'>Contact:</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type='text'
                                    className= {nameErr ? 'is-invalid' : ''}
                                    name='name'
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                    placeholder='Enter Name'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email:</Form.Label>
                                <Form.Control
                                    type='email'
                                    className={emailErr ? 'is-invalid' : ''}
                                    name='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder='Enter Email'
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='message'>Message:</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    className={messageErr ? 'is-invalid' : ''}
                                    name='message'
                                    rows={7}
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder='Write Your Message Here'
                                    required
                                />
                            </Form.Group>

                            <Button type='submit'>Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;