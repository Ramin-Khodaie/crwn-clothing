/**
 * collection component includes collectionItem and pass items related to specific collection .
 */

import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./collection.scss";

function Collection(props) {
  const {_id,title, items } = props;
  return (
    <div className="collectionpreview">
      <h1
        className="title"
        onClick={() => props.history.push(`/shop/${_id}`)}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default withRouter(Collection);
