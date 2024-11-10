import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Home from "./directories/home";
import AuthGuard from "./components/AuthGuard";
import { authChech } from "./lib/auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthGuard authFunc={await authChech()} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route
          path="/login"
          element={<LoginForm authFunc={await authChech()} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
