import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./collection.scss";

function Collection(props) {
  const { title, items } = props;
  return (
    <div className="collectionpreview">
      <h1
        className="title"
        onClick={() => props.history.push(`/shop/${title.toLowerCase()}`)}
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
