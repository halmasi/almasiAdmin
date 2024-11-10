import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import LoginForm from "./components/LoginForm";
import Home from "./directories/home";

async function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthGuard authfunc={await authChech()} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
