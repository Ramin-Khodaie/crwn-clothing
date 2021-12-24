import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router-dom";
import { doLogin } from "../../redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./signin.scss";
import useNotify from "../../context/notify/useNotify";

const SignIn = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const notify = useNotify();
  const dispatch = useDispatch();
  const { status, currentUser, error } = useSelector(
    (state) => state.currentUser
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;
    const data = { email, password };

    const res = await dispatch(doLogin(data))
      .then((d) => {
        console.log(3344, d);
        if (d.payload.message === "Invalid email or password") {
          notify(d.payload.message);
        }
        if (d.payload.status === "success") {
          notify("logged in successfully");
          history.push("/");
          setState({
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => notify(err));
  };
  return (
    <div className="signin">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          handleChange={handleChange}
          required
          value={state.email}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          handleChange={handleChange}
          required
          value={state.password}
        />
        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            Sign in
          </CustomButton>
          <CustomButton isgooglesignin> Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};
export default withRouter(SignIn);
