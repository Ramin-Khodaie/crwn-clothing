import { Typography, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import shop_data from "../../Data/shop_data";
import Collection from "../../components/Collection/Collection";
const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
    padding: "30px",
  },
}));
function Products(props) {
  const { title, items } = shop_data;
  console.log(300, items);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {shop_data.map(({ id, ...otherProps }) => (
        <Collection key={id} {...otherProps} />
      ))}
    </div>
  );
}
export default withRouter(Products);
