import { Typography,button, Button,IconButton } from "@material-ui/core";
import {
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import FacebookIcon from "../icons/facebookIcon";

import { useState } from "react";
const useStyle = makeStyles(() => ({
  root: {
    marginLeft: "75px",
    width: "80%",
    marginTop: "150px",
    
  },
  inputText: {
  
    display: "flex",
    padding:"20px",
    width:"380px",
    

  },
  signinbtn:{
    display:"flex",
    width:"400px",
    padding:"20px",
    margin:"10px",
    '&:hover':{
      backgroundColor:" black ",
      color:"white"
    }

  }
}));
export default function SignIn() {
  const [remember, setRemember] = useState(true);
  const classes = useStyle();

  const handleChange = (e) => {
    setRemember(!remember);
    console.log(4500, remember);
  };
  return (
    <div className={classes.root}>
      <fieldset  style={{height:"600px",borderRadius:5,color:"#0c0b09"}}>
      <legend style={{marginInline:7}}>
        <Typography variant="h6">Sing in </Typography>
        </legend>
      <form style={{marginLeft:"30px"}}>
        <TextField type="email" label="Email" className={classes.inputText} color="secondary"/>
        <TextField
          type="passeord"
          label="Password"
          className={classes.inputText}
          color="secondary"
        />

        <Checkbox
          checked={remember}
          onChange={handleChange}
          name="checkedB"
          color="secondary"
          label="Remember me!"
          style={{marginBottom:"0px"}}
        />
        <span style={{ padding: "5px",marginTop:"50px" }}>Remember Me!</span>
       
       <div style={{marginTop:"95px"}}>
       <Button variant="outlined" color="inherit" startIcon={<MeetingRoomIcon/>} className={classes.signinbtn}>
       Sign in
      </Button>
    
      <Button variant="contained" color="inherit" startIcon={<GoogleIcon/>} className={classes.signinbtn}>
       Sign in with google account
      </Button>
      <Button variant="contained" color="inherit" startIcon={<FacebookIcon/>} className={classes.signinbtn}>
       Sign in with facebook account
      </Button>
       </div>
       
      </form>
    
     
      </fieldset>
     
    </div>
  );
}
