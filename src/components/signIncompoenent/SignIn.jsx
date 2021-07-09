import { Typography, button, Button, IconButton } from "@material-ui/core";
import {
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import FacebookIcon from "../icons/facebookIcon";
import {
  auth,
  createUserProfileDocument,
  signinWithGoogle,
} from "../../components/firebase-utils/firebase";

import { useState } from "react";
import { withRouter } from "react-router-dom";
const useStyle = makeStyles(() => ({
  root: {
    marginLeft: "75px",
    width: "80%",
    marginTop: "150px",
  },
  inputText: {
    display: "flex",
    padding: "20px",
    width: "380px",
  },
  signinbtn: {
    display: "flex",
    width: "400px",
    padding: "20px",
    margin: "10px",
    "&:hover": {
      backgroundColor: " black ",
      color: "white",
    },
  },
}));

function SignIn({ history }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const classes = useStyle();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(100, state);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      await createUserProfileDocument(user);
      alert("You logged in succsesfuly!");
      history.push("/");
      setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(500, "error message:", error);
    }
  };
  return (
    <div className={classes.root}>
      <fieldset style={{ height: "600px", borderRadius: 5, color: "#0c0b09" }}>
        <legend style={{ marginInline: 7 }}>
          <Typography variant="h6">Sing in </Typography>
        </legend>
        <form style={{ marginLeft: "30px" }} onSubmit={(e) => handleSubmit(e)}>
          <TextField
            type="email"
            label="Email"
            name="email"
            className={classes.inputText}
            color="secondary"
            value={state.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="passeord"
            label="Password"
            name="password"
            className={classes.inputText}
            color="secondary"
            value={state.password}
            onChange={(e) => handleChange(e)}
          />

          <div style={{ marginTop: "95px" }}>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<MeetingRoomIcon />}
              className={classes.signinbtn}
              type="submit"
            >
              Sign in
            </Button>

            <Button
              variant="contained"
              color="inherit"
              startIcon={<GoogleIcon />}
              className={classes.signinbtn}
              onClick={signinWithGoogle}
            >
              Sign in with google account
            </Button>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<FacebookIcon />}
              className={classes.signinbtn}
            >
              Sign in with facebook account
            </Button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
export default withRouter(SignIn);
