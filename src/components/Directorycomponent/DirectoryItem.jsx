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
    transition:"all 1s ease",
    " &:hover": {
      cursor: "pointer",
      transform:"scale(1.3)", 
    
    },
  },
}));
export default function DirectoryItem({ title, size, image, id, linkUrl }) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Card style={{ height: "500px",margin:"auto",width:"100%" }}>
        <CardHeader title={<Typography variant="h6">{title}</Typography>} />

        <CardMedia
          image={image}
          style={{ width: "100%", height:"100%" }}
          title={title}
          className={classes.cardImage}
        />
      </Card>
    </div>
  );
}
