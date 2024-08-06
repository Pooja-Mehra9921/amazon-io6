import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
  </>
);