import { Typography, makeStyles } from "@material-ui/core";
import Directory from "../components/Directorycomponent/Directory";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
}));

export default function Homepage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Directory />
    </div>
  );
}
