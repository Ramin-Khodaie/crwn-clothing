import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import Products from "./pages/Products/Products";
import sections from "./Data/Data";
import { auth } from "./components/firebase-utils/firebase";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Unsubscribe } from "@material-ui/icons";
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }
//   const [state, setstate] = useState({ currentUser: null });
// const handleCurrentUser=()=>{
//   const user = auth.currentUser;
//   setstate({currentUser:user})
// }
// console.log(350,state.currentUser)

componentDidMount(){
  auth.onAuthStateChanged((user)=>{
    this.setState({currentUser:user})
    console.log(450,user)
  })
}

render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header isloggedin={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage data={sections} />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );

}
  }
