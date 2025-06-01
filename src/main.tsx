import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./style/reset.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
