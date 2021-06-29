import HomePage from "./pages/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/AboutPage";
import Shop from "./pages/ShopPage";
import SignInPage from "./pages/signInPage";
import ProductDetail from "./pages/ProductDetail";
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
            <HomePage data={sections}/>{" "}
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
          <Route path="/products">
            <ProductDetail title={sections[0].title}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
