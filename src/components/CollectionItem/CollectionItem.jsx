import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    width: "22%",
    display: "flex",
    flexDirection: "column",
    height: "350px",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "95%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "5px",
    transition: "all 1s ease",
    " &:hover": {
      cursor: "pointer",
      //   transform: "scale(1.4)",
      //   width: "100%",
      //   height: "100%",
      //   margin: "auto",
    },
  },
  footer: {
    width: "100%",
    height: "5%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
  },
  name: {
    width: "90%",
    marginBottom: "15px",
  },
  price: {
    width: "10%",
    marginBottom: "15px",
  },
}));
export default function CollectionItem(props) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={props.imageUrl} />
      <div className={classes.footer}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.price}>{props.price}</span>
      </div>
    </div>
  );
}
