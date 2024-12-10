import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { TiArrowSortedDown, TiChevronRightOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({ menuToggler }: { menuToggler: () => void }) {
	const location = useLocation();
	const [subMenu, setSubMenu] = useState({ state: true, menu: "" });
	return (
		<div className='flex flex-col w-full px-5'>
			<h2 className='text-xl font-bold self-center'>Menu Item</h2>
			<ul className='text-lg'>
				<li
					onClick={() => {
						setSubMenu({ state: false, menu: "" });
					}}
				>
					<Link
						className={`flex items-center w-fit ${
							location.pathname == "/" && "text-blue-300"
						}`}
						to='/'
						onClick={menuToggler}
					>
						{location.pathname == "/" ? <TiChevronRightOutline /> : <BsDot />}
						Home
					</Link>
				</li>
				<li
					onClick={() => {
						if (subMenu.menu != "messages")
							setSubMenu({ state: true, menu: "messages" });
						else if (
							subMenu.menu == "messages" &&
							subMenu.state == true &&
							!location.pathname.startsWith("/messages")
						)
							setSubMenu({ state: false, menu: "" });
					}}
				>
					<div className='flex items-center justify-between'>
						<Link
							className={`flex items-center w-fit ${
								location.pathname.startsWith("/messages") && "text-blue-300"
							}`}
							to='/messages'
							onClick={menuToggler}
						>
							{location.pathname == "/messages" ? (
								<TiChevronRightOutline />
							) : (
								<BsDot />
							)}
							Messages
						</Link>
						<TiArrowSortedDown />
					</div>
					<div
						className={`pl-4 bg-gray-500 ${
							subMenu.menu == "messages" && subMenu.state == true
								? ""
								: "hidden"
						}`}
					>
						<Link
							className={`flex items-center ${
								location.pathname == "/messages/list" && "text-blue-300"
							} w-fit inline`}
							to='/messages/list'
							onClick={() => {
								menuToggler();
								setSubMenu({ state: true, menu: "messages" });
							}}
						>
							{location.pathname == "/messages/list" ? (
								<TiChevronRightOutline />
							) : (
								<BsDot />
							)}
							lists
						</Link>
					</div>
				</li>
				<li
					onClick={() => {
						if (subMenu.menu != "posts")
							setSubMenu({ state: true, menu: "posts" });
						else if (
							subMenu.menu == "posts" &&
							subMenu.state == true &&
							!location.pathname.startsWith("/posts")
						)
							setSubMenu({ state: false, menu: "" });
					}}
				>
					<div className='flex items-center justify-between'>
						<Link
							className={`flex items-center w-fit ${
								location.pathname.startsWith("/posts") && "text-blue-300"
							}`}
							to='/posts'
							onClick={() => {
								menuToggler();
								setSubMenu({ state: true, menu: "posts" });
							}}
						>
							{location.pathname == "/posts" ? (
								<TiChevronRightOutline />
							) : (
								<BsDot />
							)}
							Posts
						</Link>{" "}
						<TiArrowSortedDown />
					</div>
					<div
						className={`pl-4 bg-gray-500 ${
							subMenu.menu == "posts" && subMenu.state == true ? "" : "hidden"
						}`}
					>
						<Link
							className={`flex items-center ${
								location.pathname == "/posts/list" && "text-blue-300"
							} w-fit inline`}
							to='/posts/list'
							onClick={() => {
								menuToggler();
								setSubMenu({ state: true, menu: "posts" });
							}}
						>
							{location.pathname == "/posts/list" ? (
								<TiChevronRightOutline />
							) : (
								<BsDot />
							)}
							Posts List
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
}
