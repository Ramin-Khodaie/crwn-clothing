import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shopSelectore";
import Collection from "../../components/Collection/Collection";
import CollectionOverview from "../../components/ColectionOverview/CollectionOverview";

function Products({ collections }) {
  return (
    <div>
      <CollectionOverview />
    </div>
  );
}

export default Products;
