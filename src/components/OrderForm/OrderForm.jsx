import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeOrder } from "../../api/orderServices/orderApi";
import { ResetCartItems } from "../../redux/cart/cartSlice";

import "./OrderForm.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import useNotify from "../../context/notify/useNotify";

const OrderForm = ({ history }) => {
  const formInfo = {
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    province: "",
    city: "",
    street: "",
  };

  const [validInputs, setValidInputs] = useState({
    email: false,
    phone: false,
    zipCode: false,
  });

  const [state, setState] = useState(formInfo);
  const [isFormvalid, setIsFormvalid] = useState(false);

  const { cartItems } = useSelector((state) => state.cartitem);
  const dispatch = useDispatch();

  const notify = useNotify();

  const formValidation = (name, value) => {
    if (!name || !value) {
      return;
    }
    switch (name) {
      case "zipcode":
        return /^[0-9]+$/.test(value) && value.length === 5;

      case "email":
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );

      case "phone":
        return /^[0-9]+$/.test(value) && value.length === 11;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    const validinputs = formValidation(name, value);
    setValidInputs({ ...validInputs, [name]: true });
    setIsFormvalid(Object.values(validInputs).every(Boolean));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormvalid) {
      const order = {
        cartitems: cartItems,
        userinfo: state,
      };
      makeOrder(order)
        .then((data) => {
          dispatch(ResetCartItems());
        })
        .catch((error) => notify(error));
    }
    history.push("/");
  };
  return (
    <div className="OrderForm">
      <div className="title">
        <h3>fill the form</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            name="fullName"
            required
            value={state.name}
            onChange={handleChange}
          />
          <label className="form__label">Full Name </label>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            required
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <label className="form__label">Email</label>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="type"
            placeholder="Phone"
            required
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
          <label className="form__label">Phone-Number</label>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="type"
            placeholder="Zip-Code"
            required
            name="zipCode"
            value={state.zipCode}
            onChange={handleChange}
          />
          <label className="form__label">Zip-Code</label>
        </div>
        <div className="form__selectgroup">
          <label className="form__label">Provinc</label>
          <select
            className="form__select"
            required
            name="province"
            value={state.province}
            onChange={handleChange}
          >
            <option selected disabled>
              Select an Option
            </option>
            <option className="form-options">LA</option>
            <option className="form-options">NY</option>
            <option className="form-options">WD</option>
            <option className="form-options">FL</option>
          </select>
        </div>
        <div className="form__selectgroup">
          <label className="form__label">City</label>
          <select
            className="form__select"
            required
            name="city"
            value={state.city}
            onChange={handleChange}
          >
            <option selected disabled>
              Select an Option
            </option>
            <option className="form-options">LA</option>
            <option className="form-options">NY</option>
            <option className="form-options">WD</option>
            <option className="form-options">FL</option>
          </select>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="type"
            placeholder="Street"
            name="street"
            value={state.street}
            onChange={handleChange}
          />
          <label className="form__label">Street</label>
        </div>
        <div className="form__btn">
          <CustomButton type="submit">Order</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(OrderForm);
