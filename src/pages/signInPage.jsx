import { Typography, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
}));
export default function SignInPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography>sign in page.</Typography>
    </div>
  );
}
