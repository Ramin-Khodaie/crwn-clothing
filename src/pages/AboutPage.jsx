import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
}));
export default function About() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography>About Page</Typography>
    </div>
  );
}
