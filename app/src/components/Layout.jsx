import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 flex gap-4 w-full border-b mb-6">
        <ul className="flex gap-6">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink>
          </li>
        </ul>
      </nav>
      <main className="p-6 space-y-6 text-center m-6">
        <Outlet />
      </main>
    </div>
  );
}