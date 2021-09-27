/**
 * This component takes an array of collection and pass it to Collection component to display them.
 */

import { connect, useDispatch, useSelector } from "react-redux";
import Collection from "../Collection/Collection";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shopSelectore";

import { fetchCollection } from "../../redux/collection/collectionAction";
import { useEffect } from "react";
import collections from "../../Data/shop_data";
import { withRouter } from "react-router";

const CollectionOverview = (props) => {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.collection);
  useEffect(() => {
    dispatch(fetchCollection(collections));
  }, []);

  console.log(555, collection);
  return (
    <div>
      {collection ? (
        collection.map(({ id, ...otherProps }) => (
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

// const mapStateToProps = (state) => ({
//   collections: state.shop.collections,
// });
export default withRouter(CollectionOverview);
