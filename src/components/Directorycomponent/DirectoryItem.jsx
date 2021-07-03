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
import { Link, withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
    position: "relative",
  },
  cardImage: {
    transition: "all 1s ease",
    " &:hover": {
      cursor: "pointer",
      transform: "scale(1.4)",
      width: "100%",
      height: "100%",
      margin: "auto",
    },
    font: {
      position: "absolute",
      top: "50%",
      width: "100%",
      textAlign: "center",
      color: "black",
      backgroundColor: "none",
      fontFamily: "Comic Sans MS",
    },
  },
}));
function DirectoryItem({ title, id, history, imageUrl, match, linkUrl }) {
  const classes = useStyle();

  return (
    <div>
      <Card
        style={{
          height: "400px",
          margin: "auto",
          width: "100%",
          position: "relative",
        }}
      >
        <CardActionArea onClick={() => history.push(`${match.url}${linkUrl}`)}>
          <CardHeader title={<Typography variant="h6">{title}</Typography>} />

          <CardMedia
            image={imageUrl}
            style={{ width: "100%", height: "400px" }}
            title={title}
            className={classes.cardImage}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
export default withRouter(DirectoryItem);
