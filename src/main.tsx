import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Home from "./directories/home";
import AuthGuard from "./components/AuthGuard";
import { authChech } from "./lib/auth";
import Messages from "./directories/Messages";
import Posts from "./directories/Posts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthGuard authFunc={await authChech()} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/messages"
            element={
              <Home>
                <Messages />
              </Home>
            }
          />
          <Route
            path="/posts"
            element={
              <Home>
                <Posts />
              </Home>
            }
          />
        </Route>
        <Route
          path="/login"
          element={<LoginForm authFunc={await authChech()} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
