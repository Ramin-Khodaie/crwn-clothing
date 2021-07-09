import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import Products from "./pages/Products/Products";
import sections from "./Data/Data";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase-utils/firebase";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(64674, this.state);
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
