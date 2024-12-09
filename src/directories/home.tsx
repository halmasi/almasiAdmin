import { ReactNode } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Home({ children }: { children?: ReactNode }) {
  return (
    <body className="min-h-svh">
      <Header />
      <div className="flex flex-row">
        <div className="w-2/12 min-h-svh flex flex-col bg-slate-600 text-white items-center">
          <SideBar />
        </div>
        <main className="w-10/12">{children || "home"}</main>
      </div>
    </body>
  );
}
