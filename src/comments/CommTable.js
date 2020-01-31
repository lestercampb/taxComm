import React, {useState} from 'react';
import { Table, Button } from 'reactstrap';
import CommCreate from './CommCreate';


const CommTable = (props) => {
  const [createUp, setCreateUp] = useState(false);

  const commMapper = () => {
    return props.comments.map((comment, index) => {
    return (
      
       <tr key={index}>
          <td>{comment.form}</td>
          <td>{comment.schedule}</td>
          <td>{comment.line}</td>
          <td>{comment.comment}</td>
          <td><Button>Delete</Button><Button>Update</Button></td>
        </tr>
      
    
    
  )
} )}

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
          <th>Form</th>
          <th>Schedule</th>
          <th>Line</th>
          <th>Comment</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {commMapper()}
        {createUp ? <CommCreate token={props.token} createOff={createOff} fetchComms={props.fetchComms}  /> : <></>}
      </tbody>
      </Table>
      <Button outline color="info" size="md" block onClick={(e) => setCreateUp(!createUp)}>Add New Comment</Button>
     
      </>
)
}

export default CommTable;