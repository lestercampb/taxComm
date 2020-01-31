import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    const toggle = () => setModal(!modal);

return (
    <div>
    <Modal isOpen={modal}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input name="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                
                <Button color="primary" type="submit" onClick={toggle}>Submit</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </Form>
        </ModalBody>
    </Modal>
    </div>
   
)
}
export default Login;