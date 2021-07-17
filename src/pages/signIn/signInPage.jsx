import SignIn from "../../components/signIncompoenent/SignIn";
import SignUp from "../../components/SignupComponent/SignUp";

import "./signinpage.scss";

export default function SignInPage() {
  return (
    <div className="signinpage">
      <SignIn />
      <SignUp />
    </div>
  );
}
