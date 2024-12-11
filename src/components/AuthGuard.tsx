import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthGuard({ authFunc }: { authFunc: boolean }) {
	const [token, setToken] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setToken(authFunc);
	}, []);
	useEffect(() => {
		if (!authFunc) {
			return navigate("/login");
		}
	}, [token]);
	return <Outlet />;
}
