import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    console.log(APIURL)
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
            console.log(data.user.firstName);
            props.updateUser(data.user.firstName);
        }) 
    }

    const toggle = () => setModal(!modal);

return (
    <>
    <Modal isOpen={modal}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input name="username" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                
                <Button color="primary"  onClick={email.type==="email" ? toggle : console.log('needs email')} type="submit">Submit</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </Form>
        </ModalBody>
    </Modal>
    </>
   
)
}
export default Login;