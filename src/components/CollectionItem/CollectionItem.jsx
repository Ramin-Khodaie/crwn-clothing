import "./collectionitem.scss";
export default function CollectionItem({ imageUrl, name, price }) {
  return (
    <div className="collectionitem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
