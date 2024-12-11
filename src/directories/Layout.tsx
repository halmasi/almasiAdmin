import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
	const [showMenu, setShowMenu] = useState(false);
	const menuToggler = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div className='min-h-svh'>
			<Header menuToggler={menuToggler} />
			<div className='flex flex-row'>
				<div
					className={`w-full ${
						!showMenu && "translate-x-[calc(-100svw)]"
					} md:translate-x-0 ease-out transition-transform duration-300 absolute md:sticky md:w-2/12 min-h-svh md:flex flex-col bg-slate-600 text-white items-center`}
				>
					<SideBar menuToggler={menuToggler} />
				</div>
				<main className='w-full md:w-10/12 h-[200svh] p-2'>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
