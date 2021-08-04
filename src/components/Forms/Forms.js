import React,{useState} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import useStyles from './styles';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPosts} from '../../actions/posts';
const Form =()=>{
    const classes =useStyles();
    const dispatch=useDispatch();
    const [postData,SetPostData]=useState({
        creator:'',title:'',message:'',tags:'',selectedFile:'',
    })
    // const =()=>{}
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createPosts(postData));
    }
    const clear=()=>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Add New Quotes</Typography>
                    <TextField name="creator" varient="outline" label="Creator" fullWidth value={postData.creator} onChange={(e)=>SetPostData({...postData,creator:e.target.value})} />
                    <TextField name="title" varient="outline" label="Catagory" fullWidth value={postData.title} onChange={(e)=>SetPostData({...postData,title:e.target.value})} />
                    <TextField name="message" varient="outline" label="Quote" fullWidth value={postData.message} onChange={(e)=>SetPostData({...postData,message:e.target.value})} />
                    <TextField name="tags" varient="outline" label="Tags" fullWidth value={postData.tags} onChange={(e)=>SetPostData({...postData,tags:e.target.value})} />
                    <div className={classes.fileInput}>
                        <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=>SetPostData({...postData,selectedFile:base64})}/>
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
export default Form;