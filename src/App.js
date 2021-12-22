import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import ShopPage from "./pages/Shop/ShopPage";
import { useDispatch } from "react-redux";
import { addAllProductstoMongo } from "./redux/shop/productAction";

import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
} from "react-router-dom";
import CheckoutPage from "./pages/Chechout/Checkoutpage";
import { fecthProducts } from "./redux/shop/productAction";
import { useTheme } from "./context/theme/useTheme";

const App = ({ currentUser }) => {
  const { mode } = useTheme();
  const classArray = ["App"];
  if (mode) {
    classArray.push("dark");
  }
  console.log(4433, mode);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fecthProducts(products));
    dispatch(fecthProducts());
  }, []);
  return (
    <div className='App' style={{backgroundColor:mode ? '#222' : '',color:mode?"#fff":''}}>
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

export default App;
