import "./collectionitem.scss";
import CustomButton from "../CustomButton/CustomButton";

export default function CollectionItem({ imageUrl, name, price }) {
  return (
    <div className="collectionitem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
}
