import { Typography, makeStyles } from "@material-ui/core";
import CollectionItem from "../CollectionItem/CollectionItem";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  preview: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export default function Collection(props) {
  console.log(200, props.items);
  const { title, items } = props;
  const classes = useStyle();
  return (
    <div style={{ marginTop: "50px" }} className={classes.root}>
      <Typography variant="h5">{title}</Typography>
      <div className={classes.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemprops }) => (
            <CollectionItem key={id} {...itemprops} />
          ))}
      </div>
    </div>
  );
}
