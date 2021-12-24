import "./App.css";
import React, { useEffect, useState, useContext } from "react";
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
import { ThemeContext } from "./context/theme/themeContext";
import PrivateRoute from "./components/PrivateRout/privateRoute";
import Category from "./pages/Category/CategoryPage";
import CollectionOverview from "./components/ColectionOverview/CollectionOverview";

const App = ({ currentUser }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fecthProducts(products));
    dispatch(fecthProducts());
  }, []);
  const { theme } = useTheme();
  return (
    <div className="App">
      <Route path="/signin" component={SignInPage} />
      <Switch>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/about">
          <About />
        </PrivateRoute>
        <PrivateRoute path="/checkout">
          <CheckoutPage />
        </PrivateRoute>
        <PrivateRoute path="/shop" exact>
          <CollectionOverview />
        </PrivateRoute>
        <PrivateRoute path={`/shop/:_id`}>
          <Category />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
