import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
}));
export default function Shop() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography>Shop Page</Typography>
    </div>
  );
}
