import HomePage from "./pages/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/AboutPage";
import Shop from "./pages/ShopPage";
import SignInPage from "./pages/signInPage";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/Shop">
            {" "}
            <Shop />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
