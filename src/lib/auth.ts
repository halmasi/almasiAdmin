export async function authCheck() {
	const chechAuth = await fetch(process.env.BACKEND_API + "/login", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
	const result = chechAuth.status >= 200 && chechAuth.status < 300;
	return result;
}

export async function logOut() {
	await fetch(process.env.BACKEND_API + "/login", {
		method: "DELETE",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
	window.location.reload();
}
