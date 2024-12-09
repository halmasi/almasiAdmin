import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Layout from "./directories/Layout";
import AuthGuard from "./components/AuthGuard";
import { authChech } from "./lib/auth";
import Messages from "./directories/Messages";
import Posts from "./directories/Posts";
import Dashboard from "./directories/Dashboard";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AuthGuard authFunc={await authChech()} />}>
					<Route
						path='/'
						element={
							<Layout>
								<Dashboard />
							</Layout>
						}
					/>
					<Route
						path='/messages'
						element={
							<Layout>
								<Messages />
							</Layout>
						}
					/>
					<Route
						path='/posts'
						element={
							<Layout>
								<Posts />
							</Layout>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={<LoginForm authFunc={await authChech()} />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
