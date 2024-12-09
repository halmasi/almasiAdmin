import { BiLogOut } from "react-icons/bi";
import { logOut } from "../lib/auth";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 flex justify-between px-10 py-5">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <button
        className="bg-red-800 flex items-center space-x-2 text-white px-3 py-1 rounded-xl"
        onClick={logOut}
      >
        <p>Logout</p>
        <BiLogOut />
      </button>
    </header>
  );
}
