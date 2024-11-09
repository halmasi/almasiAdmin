import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1 className='text-3xl text-red-700'>Hello world!</h1>,
	},
	{
		path: "/login",
		element: <LoginForm />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
