/**
 * item will display here individualy
 */

import "./collectionitem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect, useSelector, useDispatch } from "react-redux";
import {  addItem } from "../../redux/cart/cartAction";
import { cartItems } from "../../redux/cart/cartSlice";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  const { cartItem } = useSelector((state) => state.cartitem);

  // const addCartItemToCart = (item) => {
  //   const exsiting = cartItem.find((i) => i._id === item._id);
  //   console.log(2222,cartItem)
  //   if (exsiting) {
  //     return cartItem.map((a) =>
  //       dispatch(
  //         cartItems(a._id === item._id ? [{ ...a, quantity: a.quantity + 1 }] : a)
  //       )
  //     );
  //   }
  //   return dispatch(cartItems([...cartItem, { ...item, quantity: 1 }]));
  // };
  return (
    <div className="collectionitem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
      
      {//here using cartSlice items added to state,using addItem2 action
      /* <CustomButton inverted onClick={() => dispatch(cartItems(item))}>
        Add to cart
      </CustomButton> */}
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
