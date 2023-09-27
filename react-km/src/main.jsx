import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import App from "./routes";
import "./styles/index.css";
import { ThemeProvider } from "./utils/states/contexts/theme";
import store from "./utils/states/redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
