import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import "./header.scss";
import CartIcon from "../CartIcon/CartIcon";
import Cartdropdown from "../Cart-dropdown/Cart-dropdown";
import { useTheme } from "../../context/theme/useTheme";
import { Switcher } from "../Switcher/Switcher";
import useNotify from "../../context/notify/useNotify";
import { userLogout } from "../../redux/user/userAction";

function Header({ history }) {
  const { message, currentUser } = useSelector((state) => state.currentUser);

  const notify = useNotify();
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cartitem);
  const { cartItems } = useSelector((state) => state.cartitem);
  const { mode, handleToggle } = useTheme();

  //logging out from current account
  const dologout = async () => {
    await dispatch(userLogout());

    notify("loguot successfuly");
    history.push("/signin");
    // setstate({ loggedin: false });
    // history.push("/signin");
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Switcher isOn={mode} toggleMode={handleToggle} />
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <Link className="option" onClick={dologout}>
            Sign out
          </Link>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        {currentUser && <CartIcon itemCount={cartItems && cartItems.length} />}
      </div>
      {hidden && <Cartdropdown />}
    </div>
  );
}

export default withRouter(Header);
