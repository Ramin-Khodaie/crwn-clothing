import "./App.css";
import HomePage from "./pages/Home/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/AboutPage";
import SignInPage from "./pages/signIn/signInPage";
import Products from "./pages/Products/Products";
import sections from "./Data/Data";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
