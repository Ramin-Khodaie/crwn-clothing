import { withRouter } from "react-router-dom";
import shop_data from "../../Data/shop_data";
import Collection from "../../components/Collection/Collection";

function Products() {
  return (
    <div>
      {shop_data.map(({ id, ...otherProps }) => (
        <Collection key={id} {...otherProps} />
      ))}
    </div>
  );
}
export default withRouter(Products);
