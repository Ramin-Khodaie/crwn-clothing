import {
  Typography,
  TextField,
  Checkbox,
  Button,
  makeStyles,
} from "@material-ui/core";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase-utils/firebase";

const useStyle = makeStyles(() => ({
  root: {
    margin: "auto",
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
    marginTop: "20px",
  },
}));

function SignUp({ history }) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const classes = useStyle();

  const handleChange = (e) => {
    console.log(540, e.target.name);
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, lastName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("password is not match!");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { name });
      alert("You logged in succsesfuly!");
      history.push("/");
      setState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(500, "error message:", error);
    }
  };
  return (
    <div className={classes.root}>
      <fieldset style={{ height: "600px", borderRadius: 5, color: "#0c0b09" }}>
        <legend style={{ marginInline: 7 }}>
          <Typography variant="h6">Sing up </Typography>
        </legend>
        <form style={{ marginLeft: "30px" }} onSubmit={(e) => handleSubmit(e)}>
          <TextField
            label="Name"
            name="name"
            className={classes.inputText}
            value={state.name}
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="LastName"
            name="lastName"
            className={classes.inputText}
            value={state.lastName}
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Email"
            name="email"
            className={classes.inputText}
            value={state.email}
            type="email"
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="passeord"
            name="password"
            value={state.password}
            label="Password"
            className={classes.inputText}
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="passeord"
            name="confirmPassword"
            value={state.confirmPassword}
            label="ConfirmPassword"
            className={classes.inputText}
            color="secondary"
            onChange={(e) => handleChange(e)}
          />

          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LockOpenSharpIcon />}
            className={classes.signinbtn}
            type="submit"
          >
            Sign up
          </Button>
        </form>
      </fieldset>
    </div>
  );
}
export default withRouter(SignUp);
