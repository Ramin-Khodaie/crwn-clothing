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
import { history, Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: "50px",
    paddingRight: "50px",
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
  },
}));
export default function DirectoryItem({ title, size, image, id, linkUrl }) {
  const classes = useStyle();


  return (
    <div className={classes.root}>
      <Card style={{ height: "500px%", margin: "auto", width: "100%" }}>

        <CardActionArea >
          <CardHeader title={<Typography variant="h6">{title}</Typography>} />


          <Link to="/products">
            <CardMedia
              image={image}
              style={{ width: "100%", height: "400px" }}
              title={title}
              className={classes.cardImage}
            />
          </Link>

        </CardActionArea>

      </Card>
    </div>
  );
}
