import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import Directory from "../../components/Directory/Directory";
import { loginsuccess } from "../../redux/login/loginSlice";
import "./Homepage.scss";

export default function HomePage() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.isAuth);
  console.log(111, isAuth);

  useEffect(()=>{
    if(!isAuth && sessionStorage.getItem("at")){
      dispatch(loginsuccess())
    }
  },isAuth)
  if (isAuth) {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  } else {
    return <Redirect to="/signin"  />;  
  }
}
