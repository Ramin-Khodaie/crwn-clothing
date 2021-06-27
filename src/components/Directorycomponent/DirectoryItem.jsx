import {
  Typography,
  makeStyles,
  IconButton,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardImage: {
    " &:hover": {
      cursor: "pointer",
      transition: theme.transitions.create("fill", {
        // This is the fade-out transition
        duration: theme.transitions.duration.leavingScreen,
        ease: "sharp",
      }),
      " & .background-image": {
        // transform: `${scale(1.1)}`,
        transition: theme.transitions.create("fill", {
          duration: theme.transitions.duration.enteringScreen,
          ease: "sharp",
        }),
      },
      " & .content": {
        opacity: 0.9,
      },
    },
  },
}));
export default function DirectoryItem({ title, size, image, id, linkUrl }) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Card style={{ height: "500px" }}>
        <CardHeader title={<Typography variant="h6">{title}</Typography>} />

        <CardMedia
          image={image}
          style={{ width: "100%", height: "100%" }}
          title={title}
          className={classes.cardImage}
        />
      </Card>
    </div>
  );
}
