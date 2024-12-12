import { useEffect, useState } from "react";
import {
	MessageProps,
	deleteSingleMessage,
	getAllMessages,
} from "../lib/messages";
import { MdDeleteForever } from "react-icons/md";
import { IoOpen } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Messages() {
	const [messages, setMessages] = useState<MessageProps[]>([]);
	const [deleteMessage, SetDeleteMessage] = useState("");

	useEffect(() => {
		getAllMessages().then((data) => {
			const orginalData: MessageProps[] = data.data;
			setMessages(orginalData);
		});
	}, []);
	useEffect(() => {
		if (deleteMessage) {
			deleteSingleMessage(deleteMessage).then(() => {
				window.location.reload();
			});
		}
	}, [deleteMessage]);
	return (
		<div className='flex flex-wrap'>
			{!messages.length && <div>no message</div>}
			{messages.map((item) => {
				const date = new Date(item.createdAt);
				return (
					<ul
						key={item.id}
						className='p-5 bg-gray-100 border-gray-400/50 border m-5 h-auto w-fit rounded-xl'
					>
						<li className='text-gray-600 text-sm'>
							{date.toLocaleDateString("fa-IR", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
								hourCycle: "h12",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</li>
						<li className='text-gray-600 text-sm'>
							{date.toLocaleDateString("en-US", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
								hourCycle: "h12",
								hour: "2-digit",
								minute: "2-digit",
							})}
						</li>
						<li className='flex gap-3'>
							<p className='font-bold'>Email:</p>
							<a
								className='text-blue-500 hover:underline'
								href={`mailto://${item.email}`}
							>
								{" "}
								{item.email}
							</a>
						</li>
						<li className='flex gap-3'>
							<p className='font-bold'>Name: </p>
							<p>{item.name}</p>
						</li>
						<li>
							<p className='font-bold'>Message:</p> {item.content.slice(0, 50)}
							{item.content.length > 50 && "..."}
						</li>
						<div className='items-center flex flex-wrap gap-2 justify-end mt-5'>
							{item.content.length > 10 && (
								<Link
									to={"/messages/" + item.id}
									className='flex gap-2 items-center text-green-800 p-2 rounded-full'
								>
									<IoOpen />
								</Link>
							)}
							<button
								onClick={() => {
									SetDeleteMessage(item.id);
								}}
								className='aspect-square justify-center text-red-800 rounded-full'
							>
								<MdDeleteForever />
							</button>
						</div>
					</ul>
				);
			})}
		</div>
	);
}
