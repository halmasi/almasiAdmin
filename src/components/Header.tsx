import { BiLogOut } from "react-icons/bi";
import { logOut } from "../lib/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header({ menuToggler }: { menuToggler: () => void }) {
	useState(false);
	return (
		<header className='w-full bg-gray-100 flex justify-between px-10 py-5'>
			<GiHamburgerMenu onClick={menuToggler} className='text-3xl md:hidden' />
			<h1 className='text-xl font-bold'>Admin Panel</h1>
			<button
				className='bg-red-800 flex items-center md:space-x-2 text-white px-3 py-1 rounded-xl'
				onClick={logOut}
			>
				<p className='hidden md:flex'>Logout</p>
				<BiLogOut />
			</button>
		</header>
	);
}
