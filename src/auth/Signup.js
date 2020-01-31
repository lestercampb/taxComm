import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [modal, setModal] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password, firstName: firstName, lastName: lastName}),
            
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    const toggle = () => setModal(!modal)


return (
    <div>
    <Modal isOpen={modal} >
        <ModalHeader>Sign up</ModalHeader>
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
                <FormGroup>
                    <Label>First Name:</Label>
                    <Input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Last Name:</Label>
                    <Input name="password" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </FormGroup>
                
                <Button color="primary" onClick={toggle} type="submit">Submit</Button>
                <Button color="secondary" onClick = {toggle}>Cancel</Button>
            </Form>
        </ModalBody>
    </Modal>
    </div>
   
)
}
export default Signup;