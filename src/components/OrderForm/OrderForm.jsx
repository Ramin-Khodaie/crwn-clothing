import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

import "./OrderForm.scss";

const OrderForm = () => {
  const formInfo = {
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    province: "",
    city: "",
    street: "",
  };
  const [state, setState] = useState(formInfo);

  const formValidation = (name, value) => {
    if (!name || !value) {
      return;
    }
    switch (name) {
      case "zipcode":
        const re1 = /0-9/;
        return re1.test(value) ;
      case "email":
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
      case "phone":
        const re2 = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
        return re2.test(value) && value.length === 11;
      default:
        break;
    }
  };

  const validEmail = formValidation("zipcode", state.zipcode);
  console.log(8899, validEmail);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="OrderForm">
      <div className="title">
        <h3>fill the form</h3>
      </div>
      <form className="form">
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            name="name"
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
            name="zipcode"
            value={state.zipcode}
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
          <CustomButton>Order</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
