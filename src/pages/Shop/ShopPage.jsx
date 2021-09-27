import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shopSelectore";
import Collection from "../../components/Collection/Collection";
import CollectionOverview from "../../components/ColectionOverview/CollectionOverview";
import { Route, withRouter } from "react-router-dom";
import Category from "../Category/CategoryPage";
import { firestore } from "../../components/firebase-utils/firebase";
function ShopPage({ match }) {
  // useEffect(() => {
  //   const collectinRef = firestore.collection('collection');
  // }, [input])
  console.log(777, match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={Category} />
    </div>
  );
}

export default ShopPage;
