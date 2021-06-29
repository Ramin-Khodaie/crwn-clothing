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
    marginLeft: "100px",
    width: "80%",
    marginTop: "150px",
    
  },
  inputText: {
  
    display: "flex",
    padding:"20px",
    width:"380px"

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
      <legend style={{marginInline:7}}>
        <Typography variant="h6">Sing in </Typography>
      <form>
        <TextField type="email" label="Email" className={classes.inputText} />
        <TextField
          type="passeord"
          label="Password"
          className={classes.inputText}
        />

        <Checkbox
          checked={remember}
          onChange={handleChange}
          name="checkedB"
          color="primary"
          label="Remember me!"
        />
        <span style={{ padding: "5px" }}>Remember Me!</span>
       
        <Button variant="outlined" color="inherit" startIcon={<MeetingRoomIcon/>} className={classes.signinbtn}>
       Sign in
      </Button>
    
      <Button variant="contained" color="inherit" startIcon={<GoogleIcon/>} className={classes.signinbtn}>
       Sign in with google account
      </Button>
      <Button variant="contained" color="inherit" startIcon={<FacebookIcon/>} className={classes.signinbtn}>
       Sign in with facebook account
      </Button>
      </form>
      </legend>
     
    </div>
  );
}
