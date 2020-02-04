import React, {useState} from 'react';
import { Table, Button, Input } from 'reactstrap';
import CommCreate from './CommCreate';
import CommEdit from './CommEdit';
import APIURL from '../helpers/environment';


const CommTable = (props) => {
  const [createUp, setCreateUp] = useState(false);

  const [updateActive, setUpdateActive] = useState(false);
  const [commToUpdate, setCommToUpdate] = useState({});

  const deleteComm = (comment) => {
    fetch(`${APIURL}/comment/${comment.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then(() => props.fetchComms())
  }


  const commMapper = () => {
    return props.comments.map((comment, index) => {
    return (
      
       <tr key={index}>
          <td align="center"><Input type="checkbox" bssize="md" name="check" ></Input></td>
          <td>{comment.form}</td>
          <td>{comment.schedule}</td>
          <td>{comment.line}</td>
          <td>{comment.comment}</td>
          <td><Button size="sm" onClick={(e) => {deleteComm(comment)}}>Delete</Button><Button size="sm" onClick={(e) => editUpdateComm(comment)}>Update</Button></td>
        </tr>
  )
} )}

const editUpdateComm = (comment) => {
  console.log(comment);
  setCommToUpdate(comment);
  setUpdateActive(true);
}

const updateOn = () => {
  setUpdateActive(true);
}

const updateOff = () => {
  setUpdateActive(false);
}

const createOn = () => {
  setCreateUp(true);
}

const createOff = () => {
  setCreateUp(false);
}


return(
  <>
  <Table hover>
   <thead>
        <tr>
          <th>Complete?</th>
          <th>Form</th>
          <th>Schedule</th>
          <th>Line</th>
          <th>Comment</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {commMapper()}     
      </tbody>
      </Table>
      {createUp ? <CommCreate token={props.token} createOff={createOff} fetchComms={props.fetchComms}/> : <></>}
      {updateActive ? <CommEdit token={props.token} updateOff={updateOff} fetchComms={props.fetchComms} commToUpdate={commToUpdate}/> : <> </>}
      <Button outline color="info" size="md" block onClick={(e) => {createOn()}}>Add New Comment</Button>
     
      </>
)
}

export default CommTable;