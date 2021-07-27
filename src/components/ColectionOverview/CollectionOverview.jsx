import { connect } from "react-redux";
import Collection from "../Collection/Collection";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shopSelectore";

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections ? (
        collections.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps} />
        ))
      ) : (
        <div style={{ flex: "auto", textAlign: "center" }}>
          <h1>there is no item</h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});
export default connect(mapStateToProps)(CollectionOverview);
