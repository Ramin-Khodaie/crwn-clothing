import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import ShopPage from "./pages/Shop/ShopPage";
import sections from "./Data/Data";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase-utils/firebase";

import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(64674, this.props.currentUser);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage data={sections} />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          >
            <SignInPage />
          </Route>

          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
