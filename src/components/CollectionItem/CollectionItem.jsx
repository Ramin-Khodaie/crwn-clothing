/**
 * item will display here individualy
 */

import "./collectionitem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect, useSelector,useDispatch } from "react-redux";
import { accomulateCartItems, addItem } from "../../redux/cart/cartAction";
import { cartItems } from "../../redux/cart/cartSlice";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  const {cartItem} = useSelector(state=>state.cartitem)

  const addCartItemToCart = async (cartItem,item)=>{
   await dispatch(addItem(cartItem,item))
   await dispatch(accomulateCartItems(cartItem))
  }
  return (
    <div className="collectionitem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={()=>addCartItemToCart(cartItem,item)}>
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
export default (CollectionItem);
