import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { useState } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme/themeProvider";
import { NotifyProvider } from "./context/notify/NotifyProvider";
import { useTheme } from "./context/theme/useTheme";

ReactDOM.render(
  <NotifyProvider>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </NotifyProvider>,
  document.getElementById("root")
);
