import {
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import { useState } from "react";
const useStyle = makeStyles(() => ({
  root: {
    marginLeft: "100px",
    width: "100%",
    marginTop: "50px",
  },
  inputText: {
    margin: "auto",
    display: "block",
  },
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
      </form>
    </div>
  );
}
