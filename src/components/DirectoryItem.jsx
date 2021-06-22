import { Typography, makeStyles, IconButton } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "./dummy";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));
export default function DirectoryItem({ title, featured, image, author, col }) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={2} className={classes.gridList}>
        <GridListTile
          key={image}
          cols={featured ? 2 : 1}
          rows={featured ? 2 : 1}
        >
          <img src={image} alt={title} />
          <GridListTileBar
            title={title}
            titlePosition="top"
            actionIcon={
              <IconButton aria-label={`star ${title}`} className={classes.icon}>
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBar}
          />
        </GridListTile>
      </GridList>
    </div>
  );
}
