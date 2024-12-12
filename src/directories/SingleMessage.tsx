import { useNavigate, useParams } from "react-router-dom";
import {
	MessageProps,
	deleteSingleMessage,
	getSingleMessage,
} from "../lib/messages";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function SingleMessage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [message, setMessage] = useState<MessageProps>({
		id: "0",
		content: "",
		createdAt: "",
		email: "",
		name: "",
	});
	const [deleteMessage, SetDeleteMessage] = useState("");

	useEffect(() => {
		if (id) {
			getSingleMessage(id)
				.then((data) => {
					const orginalData: MessageProps = data;
					setMessage(orginalData);
				})
				.catch(() => {
					navigate("/not-found");
				});
		}
	}, []);

	useEffect(() => {
		if (deleteMessage) {
			deleteSingleMessage(deleteMessage);
			navigate("/messages");
		}
	}, [deleteMessage]);

	const date = new Date(message.createdAt);
	return (
		<div className='flex flex-col min-h-[80svh] justify-between'>
			<div>
				<div className='flex flex-wrap gap-4 justify-between md:px-20'>
					<p className='text-gray-600 text-sm'>
						{date.toLocaleDateString("en-US", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
							hourCycle: "h12",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
					<p className='text-gray-600 text-sm'>
						{date.toLocaleDateString("fa-IR", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
							hourCycle: "h12",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
				</div>
				<div className='flex items-center gap-5 bg-gray-300 p-3 m-3 rounded-lg'>
					<p className='text-lg font-bold'>Name:</p>
					<p className='italic'>{message.name}</p>
				</div>
				<div className='flex items-center gap-5 bg-gray-300 p-3 m-3 rounded-lg'>
					<p className='text-lg font-bold'>Email:</p>
					<a
						className='text-blue-500 hover:underline'
						href={`mailto://${message.email}`}
					>
						{message.email}
					</a>
				</div>
				<div className='items-center gap-5 bg-gray-300 p-3 m-3 rounded-lg'>
					<p className='text-lg font-bold '>Message:</p>
					<p className='ml-5 bg-slate-200 p-5 rounded-lg'>{message.content}</p>
				</div>
			</div>
			<button
				onClick={() => {
					SetDeleteMessage(message.id);
				}}
				className='p-3 bg-red-700 text-white rounded-xl flex items-center w-fit'
			>
				DELETE
				<MdDeleteForever />
			</button>
		</div>
	);
}
