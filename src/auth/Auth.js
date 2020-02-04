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
        <Jumbotron  className="four">
        <Container className="five">
          <h5>What is TaxComm?</h5>
          <h6>Hi, I'm Leslie Campbell, creator of TaxComm.</h6>
            <br/>
            <p>I'm also a former CPA who, like many of you, first started my career preparing returns for a CPA firm.  During my first years, I vowed to never make the same mistake twice.  In order to do this, I needed a way to keep any review comments I received from a tax reviewer and refer to them when preparing a similar type of return.  Seeing as this was the early 2000's, my technology of choice was pencil and paper.  I kept notes and referred to those notes on a regular basis.  My work was recognized, and I was quickly promoted.  </p>
            <p>Today, TaxComm is simply a place where you, the tax preparer, can quickly type notes and refer back to them when preparing returns in the future.  When you receive a comment, add it to TaxComm with the line item and form number.  Refer to these notes when preparing every return of a similar type and vow to never make the same mistake twice.</p>
            <p>Future TaxComm versions could include a tax reviewer sign-in where tax reviewers can push comments down to tax preparers in real-time, keeping the same comments from coming up again and again.</p>
            <p>In the end, the goal of TaxComm is to empower tax preparers to prepare their best work in their first draft, thereby ensuring less time spent in re-work.  Tax reviewers can see cleaner returns. And, my personal hope and dream of shortening the required hours of busy season can become a little more real.</p>
          
        </Container>
        </Jumbotron>
    </div>
    );
  }
  
  export default Auth;