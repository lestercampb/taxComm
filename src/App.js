import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Button} from 'reactstrap';
import Auth from './auth/Auth';
import CommIndex from './comments/CommIndex';

import './App.css';

//needed:

//update token, set session token so it can pass to comm index
const App = () => {
  const [sessionToken, setSessionToken] = useState('');
  const [userName, setUserName] = useState('');

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

const updateUser = (newUser) => {
  localStorage.setItem('user', newUser );
  setUserName(newUser);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('')
}

const protectedView = () => {
  return (sessionToken ===localStorage.getItem('token') ? <CommIndex token = {sessionToken} updateToken = {updateToken} updateUser={updateUser} clickLogout={clearToken}/>
  : <Auth updateToken = {updateToken} updateUser={updateUser}/> )
}

return(
  <div>
     {protectedView()} 
  </div>
)
}

export default App;
