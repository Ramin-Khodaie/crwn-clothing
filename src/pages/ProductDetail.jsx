import { Typography,makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
      marginTop: "100px",
    },
  }));

export default function ProductDetail(props){

    const classes = useStyle();
    return(<div className={classes.root}>
        <Typography variant="h6">
        {props.title}
        </Typography>
    </div>)
}