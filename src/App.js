import "./App.css";
import HomePage from "./pages/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/AboutPage";
import SignInPage from "./pages/signInPage";
import Products from "./pages/Products";
import sections from "./components/Directorycomponent/Data";

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
          <Route path="/products/:title">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
