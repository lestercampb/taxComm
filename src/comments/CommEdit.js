import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CommEdit = (props) => {
    const [editForm, setEditForm] = useState(props.commToUpdate.form);
    const [editSchedule, setEditSchedule] = useState(props.commToUpdate.schedule);
    const [editLine, setEditLine] = useState(props.commToUpdate.line);
    const [editComment, setEditComment] = useState(props.commToUpdate.comment);

    const commUpdate = (e) => {
        e.preventDefault();
        console.log(props.comment)
        fetch(`http://localhost:3000/comment/${props.comments.id}`, {
            method: 'PUT',
            body: JSON.stringify({form: editForm, schedule: editSchedule, line: editLine, comment: editComment}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                Authorization: props.token
            })
        }).then((res) => res.json())
        .then((commData) => {
            props.fetchComments();
            props.updateOff();
        })
       
    

    return(
        <div>
            <Modal isOpen = {true}>
                <ModalHeader>Update Comment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={commUpdate}>
                        <FormGroup>
                            <Label htmlFor="form"> Edit Form: </Label>
                            <Input name="form" value={editForm} onChange={(e) => setEditForm(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="schedule"> Edit Schedule: </Label>
                            <Input name="schedule" value={editSchedule} onChange={(e) => setEditSchedule(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="line"> Edit Line: </Label>
                            <Input name="line" value={editLine} onChange={(e) => setEditLine(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment"> Edit Comment: </Label>
                            <Input name="comment" value={editComment} onChange={(e) => setEditComment(e.target.value)}/>
                        </FormGroup>
                        <Button type="submit">Update Comment</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}}
export default CommEdit;