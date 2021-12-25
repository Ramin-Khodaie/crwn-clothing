/**
 * This component takes an array of collection and pass it to Collection component to display them.
 */

import { connect, useDispatch, useSelector } from "react-redux";
import Collection from "../Collection/Collection";
import { fetchCollection } from "../../redux/collection/collectionAction";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Progress from "../Progressbar/Progress";

const CollectionOverview = (props) => {
  const dispatch = useDispatch();
  const { collection, isLoading } = useSelector((state) => state.collection);
  useEffect(() => {
    console.log(1009, collection);
    dispatch(fetchCollection(collection));
  }, []);

  if (isLoading) {
    return <Progress />;
  }
  return (
    <div>
      {collection &&
        collection.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps} />
        ))}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   collections: state.shop.collections,
// });
export default withRouter(CollectionOverview);
