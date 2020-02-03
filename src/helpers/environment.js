
let APIURL ='' ;

console.log("location is" + window.location.hostname);
switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
       console.log("API URL CHANGED:" + APIURL);
        break;
    case 'lrc-taxcomm-client.herokuapp.com':
       APIURL = `https://lrc-taxcomm-server.herokuapp.com`;
       break;
        
           
}
export default APIURL; 
 