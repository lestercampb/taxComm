import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Button} from 'reactstrap';
import Auth from './auth/Auth';
import CommIndex from './comments/CommIndex';

import './App.css';

//needed:

//update token, set session token so it can pass to comm index
const App = () => {
  const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')) {
    setSessionToken(localStorage.getItem('token'))
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('')
}

const protectedView = () => {
  return (sessionToken ===localStorage.getItem('token') ? <CommIndex token = {sessionToken} updateToken = {updateToken} clickLogout={clearToken}/>
  : <Auth updateToken = {updateToken}/> )
}

return(
  <div>
     {protectedView()} 
  </div>
)
}

export default App;
