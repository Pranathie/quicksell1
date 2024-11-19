import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"; // Ensure this is the correct path to your Redux store
import App from "./App"; // Ensure this is the correct path to your App component
import "./App.css"; // If you have global CSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
