import DirectoryItem from "./DirectoryItem";
import sections from "./Data";
import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
}));
export default function Directory() {
  const classes = useStyle();

  return (
    <div>
      <Grid container justify="center" spacing={4} className={classes.root}>
        {sections.map((tile) => (
          <Grid item xs={12} sm={6} xl={4}>
            <DirectoryItem
              image={tile.imageUrl}
              title={tile.title}
              size={tile.size}
              id={tile.id}
              linkUrl={tile.linkUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
