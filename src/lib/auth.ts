export async function authChech() {
  const chechAuth = await fetch(process.env.BACKEND_API + "/login", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  const res = await chechAuth.json();
  return res.state;
}

export async function logOut() {
  await fetch(process.env.BACKEND_API + "/login", {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  window.location.reload();
}
