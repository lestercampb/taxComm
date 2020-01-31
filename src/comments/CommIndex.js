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

  const fetchComms = () => {
    fetch('http://localhost:3000/comment', {
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


  const classes = useStyles();

  return (
    <div className={classes.root}>
     <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
        <Toolbar xs={12} >
          <Typography variant='h6' noWrap={true}  className={classes.title}> 
            Hello, User123456!!
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
        
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
      </div>
  );
} 

export default CommIndex;