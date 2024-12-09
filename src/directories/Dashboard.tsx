import { CgAddR } from "react-icons/cg";
import { MdMessage, MdOutlineWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Dashboard() {
	return (
		<>
			<div className='p-5'>
				<div className='flex flex-wrap gap-3'>
					<Link
						to='/posts'
						className='flex items-center gap-2 bg-blue-500 text-gray-100 rounded-md p-2'
					>
						<p>Add new post</p> <CgAddR />
					</Link>
					<Link
						to='/messages'
						className='flex items-center gap-2 bg-blue-500 text-gray-100 rounded-md p-2'
					>
						<p>See the messages</p> <MdMessage />
					</Link>
					<Link
						to='/'
						className='flex items-center gap-2 bg-blue-500 text-gray-100 rounded-md p-2'
					>
						<p>Mennage skills</p> <GiSkills />
					</Link>
					<Link
						to='/'
						className='flex items-center gap-2 bg-blue-500 text-gray-100 rounded-md p-2'
					>
						<p>Mennage works</p> <MdOutlineWorkHistory />
					</Link>
				</div>
			</div>
		</>
	);
}
