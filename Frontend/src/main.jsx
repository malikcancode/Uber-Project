import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/UserContextProvider.jsx";
import CaptainContextProvider from "./context/CaptainContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <CaptainContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContextProvider>
    </AppProvider>
  </StrictMode>
);
