import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-pink-600 text-white ">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="border-2 h-10 rounded-full border-pink-800"
          />
          <h1 className="font-bold text-lg">Movie Review</h1>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMenu(!menu)}>
          ☰
        </button>

        <div className="hidden md:flex gap-6 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-pink-600 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-pink-600 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-pink-600 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
            }
          >
            Login
          </NavLink>
        </div>
      </div>

      {menu && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 font-semibold">
          <Link to="/" onClick={() => setMenu(false)}>
            Home
          </Link>
          <Link to="/register" onClick={() => setMenu(false)}>
            Register
          </Link>
          <Link to="/login" onClick={() => setMenu(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
