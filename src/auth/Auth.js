import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Button} from 'reactstrap';
import Login from '../auth/Login';
import Signup from '../auth/Signup';



const Auth = (props) => {
    const [loginUp, setLoginUp] = useState(false);
    const [signupUp, setSignupUp] = useState(false);
  
    return (
    <div>
      
      <Jumbotron className="one">
        <Container fluid>
        <h1 className="display-3">Welcome to TaxComm</h1>
            <p className="lead">An easy app to help you produce your best work.</p>
        </Container>
      </Jumbotron>
      <Jumbotron  className="two">
        <Container className="three">
          <h3>Let's get started.</h3>
          <Button onClick={(e) => setSignupUp(!signupUp)}>Sign up</Button> <Button onClick={(e) => setLoginUp(!loginUp)}>Log in</Button>
        {loginUp ? <Login updateToken={props.updateToken} updateUser={props.updateUser} /> : <></>}
        {signupUp ? <Signup updateToken={props.updateToken} updateUser={props.updateUser}  /> : <></>}
       
  
        </Container>
        </Jumbotron>
    </div>
    );
  }
  
  export default Auth;