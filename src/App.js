import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import ShopPage from "./pages/Shop/ShopPage";
import {useDispatch } from "react-redux";
import { addAllProductstoMongo } from "./redux/shop/productAction";

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
import { fecthProducts } from "./redux/shop/productAction";
// import products from "./Data/Data";
import newData from './Data/newdata';

const App = ({ currentUser }) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fecthProducts(products));
    dispatch(fecthProducts())
    
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

export default App;
