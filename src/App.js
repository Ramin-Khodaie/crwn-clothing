import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import { useDispatch } from "react-redux";
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
import ContactPage from "./pages/Contact/ContactPage";
import useNotify from "./context/notify/useNotify";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fecthProducts(products));
    
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
        <PrivateRoute path={`/contact`}>
          <ContactPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
