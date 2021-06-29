import DirectoryItem from "./DirectoryItem";
import sections from "./Data";
import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
}));
export default function Directory(props) {
  const classes = useStyle();
  
  return (
    <div>
      <Grid container justify="center" spacing={4} className={classes.root}>
        {props.data.map((d) => (
          <Grid item xs={12} sm={6} xl={4}>
            <DirectoryItem
              image={d.imageUrl}
              title={d.title}
              size={d.size}
              id={d.id}
              linkUrl={d.linkUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
