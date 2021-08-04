import React ,{useEffect} from 'react';
import {Container ,AppBar,Grow,Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import  {getPost} from './actions/posts'
import memories from './images/memories.jpg';
import './App.css';
import Posts from './components/Posts/Posts';
import Forms from './components/Forms/Forms';
import useStyles from './styles';
const App=()=> {
  const classes =useStyles();
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getPost());
  },[dispatch])
  return (
   <Container maxWidth='lg'>
     <AppBar className={classes.appBar} position="static" color="inherit">
       <Typography  className={classes.heading} variant='h3' align='center'>Sharp Minds</Typography>
       <img  className={classes.image} src={memories} alt="memories" height="60"/>
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={7}>
              <Posts />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Forms />
           </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
