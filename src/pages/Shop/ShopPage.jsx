
import CollectionOverview from "../../components/ColectionOverview/CollectionOverview";
import { Route, withRouter } from "react-router-dom";
import Category from "../Category/CategoryPage";

function ShopPage({ match }) {
  // useEffect(() => {
  //   const collectinRef = firestore.collection('collection');
  // }, [input])
  console.log(777, match);
  return (
    <div>
      
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:_id`} component={Category} />
    </div>
  );
}

export default ShopPage;
