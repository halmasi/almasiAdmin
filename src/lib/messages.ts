export type MessageProps = {
	id: string;
	createdAt: string;
	email: string;
	name: string;
	content: string;
};

export async function getAllMessages() {
	return fetch(process.env.BACKEND_API + "/messages", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	}).then((res) => {
		return res.json();
	});
}

export async function getSingleMessage(id: string) {
	return fetch(process.env.BACKEND_API + "/messages/" + id, {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	}).then((res) => {
		return res.json();
	});
}

export async function deleteSingleMessage(id: string) {
	return fetch(process.env.BACKEND_API + "/messages/" + id, {
		method: "DELETE",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	}).then((res) => {
		return res.json();
	});
}
