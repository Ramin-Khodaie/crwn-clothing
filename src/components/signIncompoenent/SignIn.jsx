import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router-dom";
import { doLogin } from "../../redux/user/userAction";
import { useDispatch,useSelector } from "react-redux";

import "./signin.scss";
const SignIn = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const {status,currentUser,error} = useSelector(state=>state.currentUser)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {email,password} = state;
    const data = {email,password}
    
    const res = await dispatch(doLogin(data));
      console.log(555,res)
      if(res.payload.status === "success"){
        history.push("/");
        setState({
          email:"",
          password:""
        })
      }
      if(res.payload.status === "error"){
        alert(res.payload.message)
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
          <CustomButton type="submit" onClick={handleSubmit}>Sign in</CustomButton>
          <CustomButton  isgooglesignin>
            {" "}
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default withRouter(SignIn);
