import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthGuard({ authFunc }: { authFunc: boolean }) {
  useEffect(() => {
    setToken(authFunc);
  }, []);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return token ? <Outlet /> : <>{navigate("/login")}</>;
}
