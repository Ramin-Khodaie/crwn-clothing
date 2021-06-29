import { Typography, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
}));
function Products(props) {
  const { title } = props.match.params;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
}
export default withRouter(Products);
