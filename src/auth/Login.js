import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Alert} from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    console.log(APIURL)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(true);
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json(),
            
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data.user.firstName);
            props.updateUser(data.user.firstName);      
        }) .catch((err ) =>{
            console.log('no such user');
            setVisible(true);
            
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
                    <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                
                <Button color="primary"  onClick={email.type==="email" ? toggle : email.type } type="submit">Submit</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </Form>

    <Alert color="info" isOpen={visible} toggle={onDismiss}>Username and/or password is incorrect.  Please try again, or register.</Alert>
    
        </ModalBody>
    </Modal>
    </>
   
)
}
export default Login;