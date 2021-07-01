import DirectoryItem from "./DirectoryItem";
import sections from "../../Data/shop_data";
import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
}));
export default function Directory(props) {
  const classes = useStyle();
  console.log(500, props);
  return (
    <div>
      <Grid container justify="center" spacing={4} className={classes.root}>
        {props.data.map(({ id, ...otherProps }) => (
          <Grid item xs={12} sm={6} xl={4}>
            <DirectoryItem key={id} {...otherProps} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
