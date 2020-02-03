import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/Environment';
import css from './modal.css';

const CommCreate = (props) => {
    const [form, setForm] = useState('');
    const [schedule, setSchedule] = useState('');
    const [line, setLine] = useState('');
    const [comment, setComment] = useState('');
    const [createUp, setCreateUp] = useState(true);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/comment/`, {
            method: 'POST',
            body: JSON.stringify({form: form, schedule: schedule, line: line, comment: comment}),
        
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((commData) => {
            console.log(commData);
            setForm('');
            setSchedule('');
            setLine('');
            setComment('');
            props.createOff();
            props.fetchComms();
            
        })
    }

    return(
        <>
        <Modal modalClassName="modal" isOpen={true}>

       <ModalHeader>Add a new comment</ModalHeader>
       <ModalBody>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="form">Form:</Label>
                <Input type="select" name="form" defaultValue={form} onChange= {(e) => setForm(e.target.value)}>
                    <option value="SelectOne">Select One</option>
                    <option value="1040">1040</option>
                    <option value="1065">1065</option>
                    <option value="1120">1120</option>
                    <option value="k-1">K-1</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="schedule">Schedule:</Label>
                <Input name="schedule" value={schedule} onChange = {(e) => setSchedule(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="line">Line:</Label>
                <Input name="line" value={line} onChange = {(e) => setLine(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="comment">Comment:</Label>
                <Input name="comment" value={comment} onChange = {(e) => setComment(e.target.value)}/>
            </FormGroup>
            <Button type="submit" onClick={(e) => setCreateUp(false)}>Submit</Button>
            <Button onClick={(e) => props.createOff()}>Cancel</Button>
        </Form>
        </ModalBody>
        </Modal>
        </>
    )
}

export default CommCreate;