import { Typography, makeStyles } from "@material-ui/core";
import Directory from "../components/Directory";
import DirectoryItem from "../components/DirectoryItem";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "100px",
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
