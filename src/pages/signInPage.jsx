import { Typography, makeStyles, Grid } from "@material-ui/core";
import SignIn from "../components/signIncompoenent/SignIn";
const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
  signin: {
    margin: "auto",
  },
}));
export default function SignInPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={9}>
        <Grid xl={12} sm={6} md={6} className={classes.signin}>
          <SignIn />
        </Grid>
        <Grid xl={12} sm={6} md={6}>
          <SignIn />
        </Grid>
      </Grid>
    </div>
  );
}
