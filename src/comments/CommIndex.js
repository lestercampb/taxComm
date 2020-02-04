import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import CommTable from './CommTable';
import APIURL from '../helpers/environment';


import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  logout: {
      display: 'flex',
       marginLeft: '80%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: '#BDD2A6',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
 
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    overflow: "visible", 
     
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const CommIndex = (props) => {
  const [comments, setComments] = useState([]);

  
  console.log(localStorage.getItem('user'));

  const fetchComms = () => {
    fetch(`${APIURL}/comment`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((commData) => {
      setComments(commData);
      console.log(commData);
    })
  }

  const fetch1040 = () => {
    fetch(`${APIURL}/comment/form/1040`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((commData1040) => {
      setComments(commData1040);
    })
  }

  const fetch1065 = () => {
    fetch(`${APIURL}/comment/form/1065`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((commData1065) => {
      setComments(commData1065);
    })
  }
  const fetch1120 = () => {
    fetch(`${APIURL}/comment/form/1120`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((commData1120) => {
      setComments(commData1120);
    })
  }
 


  const classes = useStyles();

  return (
    <div className={classes.root}>
     <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
        <Toolbar xs={12} >
          <Typography variant='h6' noWrap={true}  className={classes.title}> 
            Hello, {localStorage.getItem('user')}!
          </Typography>
          
          <Button color="inherit" onClick={props.clickLogout} className={classes.logout}>Logout</Button>
           
        </Toolbar>
     </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       <div className={classes.toolbar} />
        <Divider />
        <List>

        <ListItem button key={'ALL'} onClick={(e) => fetchComms()}> <ListItemText primary={'ALL'} />
        </ListItem>
        <ListItem button key={'1040'} onClick={(e) => fetch1040()}> <ListItemText primary={'1040'} />
        </ListItem>
        <ListItem button key={'1065'} onClick={(e) => fetch1065()}> <ListItemText primary={'1065'} />
        </ListItem>
        <ListItem button key={'1120'} onClick={(e) => fetch1120()}> <ListItemText primary={'1120'} />
        </ListItem>
         {/* {/*} {['1040', '1065', '1120', 'ALL'].map((text) => (
            <ListItem button key={text}>
                
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
             {/*} <ListItemText primary={text} />
              </ListItemIcon >
             
         </ListItem>
          ))}*/}
        </List> 
 
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CommTable fetchComms={fetchComms} comments={comments} token={props.token}/>
        
      </main>
      </div>
  );
} 

export default CommIndex;