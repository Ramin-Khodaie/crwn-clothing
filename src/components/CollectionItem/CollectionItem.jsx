/**
 * item will display here individualy
 */

import "./collectionitem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect, useSelector, useDispatch } from "react-redux";
import { AddCartItems } from "../../redux/cart/cartSlice";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  return (
    <div className="collectionitem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(AddCartItems(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
}

/**
 * action which add item to selected items in particular collection,here when you click ADD TO CART button,
 * addItem function which is defiend in cartAction will be fired.
 */
// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });
export default CollectionItem;
