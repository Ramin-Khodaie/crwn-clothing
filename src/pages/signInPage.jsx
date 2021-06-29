import { Typography, makeStyles, Grid } from "@material-ui/core";
import SignIn from "../components/signIncompoenent/SignIn";
import SignUp from "../components/SignupComponent/SignUp";
const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
  signin: {
    margin: "auto",
    justifyContent:"center"
  },
}));
export default function SignInPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid xl={12} sm={6} md={6} >
          <SignIn />
        </Grid>
        <Grid xl={12} sm={6} md={6}>
          <SignUp/>
        </Grid>
      </Grid>
    </div>
  );
}
