import CollectionItem from "../CollectionItem/CollectionItem";

import "./collection.scss";

export default function Collection(props) {
  const { title, items } = props;
  return (
    <div className="collectionpreview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemprops }) => (
            <CollectionItem key={id} {...itemprops} />
          ))}
      </div>
    </div>
  );
}
