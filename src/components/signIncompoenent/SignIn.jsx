import {
  auth,
  createUserProfileDocument,
  signinWithGoogle,
} from "../../components/firebase-utils/firebase";
import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router-dom";

import "./signin.scss";
const SignIn = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      await createUserProfileDocument(user);
      alert("You logged in succsesfuly!");
      history.push("/");
      setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(500, "error message:", error);
    }
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
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signinWithGoogle} isgooglesignin>
            {" "}
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default withRouter(SignIn);
