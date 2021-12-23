import { useState } from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector} from "react-redux";
import { newUser } from "../../redux/user/userAction";

import FormInput from "../Form-input/Form-input";
function SignUp({ history }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
const dispatch = useDispatch();
// const {message, error} = useSelector(state=>state.user)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const { name, email, password, confirmPassword } = state;
    const user = {
      name: state.name,
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };
    if (state.password !== state.confirmPassword) {
      alert('password doesnt match.')
    }
    try {
      dispatch(newUser(user))
      alert("success");
      setState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    } catch (error) {
      console.log(500, "error message:", error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <FormInput
        name="name"
        value={state.name}
        handleChange={handleChange}
        label="Name"
        type="text"
        required
      />
      <FormInput
        name="email"
        value={state.email}
        handleChange={handleChange}
        label="Email"
        type="email"
        required
      />
      <FormInput
        name="password"
        value={state.password}
        handleChange={handleChange}
        label="Password"
        type="password"
        required
      />
      <FormInput
        name="confirmPassword"
        value={state.confirmPassword}
        handleChange={handleChange}
        label="ConfirmPassword"
        type="password"
        required
      />

      <div>
        <CustomButton type="submit" onClick={handleSubmit}>Sing up </CustomButton>
      </div>
    </div>
  );
}
export default withRouter(SignUp);
