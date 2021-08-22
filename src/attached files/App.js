import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import ShopPage from "./pages/Shop/ShopPage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/userAction";
import {
  auth,
  createUserProfileDocument,
  AddcollectionAndDocument,
} from "./components/firebase-utils/firebase";

import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
} from "react-router-dom";
import { selectCurrentUser } from "./redux/user/useSelectore";
import { selectShopItems } from "./redux/shop/shopSelectore";
import CheckoutPage from "./pages/Chechout/Checkoutpage";

const App = ({ currentUser, setCurrentUser, collection }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    console.log(4500, "mounting...");
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      AddcollectionAndDocument(
        "collections",
        collection.map(({ title, items }) => ({ title, items }))
      );
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

//fetch current user from state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collection: selectShopItems,
});

//dispatches setCurrentUser action
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
