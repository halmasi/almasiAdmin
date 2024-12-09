import { BiArrowFromLeft } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({ menuToggler }: { menuToggler: () => void }) {
	const location = useLocation();

	return (
		<div className='flex flex-col w-full px-5'>
			<h2 className='text-xl font-bold self-center'>Menu Item</h2>
			<ul className='text-lg'>
				<li>
					<Link
						className={`flex items-center ${
							location.pathname == "/" && "text-blue-300"
						}`}
						to='/'
						onClick={menuToggler}
					>
						{location.pathname == "/" ? <BiArrowFromLeft /> : <BsDot />}
						Home
					</Link>
				</li>
				<li>
					<Link
						className={`flex items-center ${
							location.pathname == "/messages" && "text-blue-300"
						}`}
						to='/messages'
						onClick={menuToggler}
					>
						{location.pathname == "/messages" ? <BiArrowFromLeft /> : <BsDot />}
						Messages
					</Link>
				</li>
				<li>
					<Link
						className={`flex items-center ${
							location.pathname == "/posts" && "text-blue-300"
						}`}
						to='/posts'
						onClick={menuToggler}
					>
						{location.pathname == "/posts" ? <BiArrowFromLeft /> : <BsDot />}
						Posts
					</Link>
				</li>
			</ul>
		</div>
	);
}
