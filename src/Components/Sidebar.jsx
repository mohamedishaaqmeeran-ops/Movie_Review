import { NavLink, useParams } from "react-router";

const SideBar = () => {
  const { id } = useParams();
  return (
    <div className=" flex flex-col items-center w-30 md:w-50 bg-pink-700 min-h-screen pt-10">
      <ul className="flex flex-col items-center gap-6">
        <li >
          <NavLink
            to={"/dashboard/Movies"}
            end
            className={({ isActive }) => {
              return isActive ? "text-pink-300 font-semibold" : "text-white hover:text-pink-300"
            }}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/dashboard/reviews/`}
            className={({ isActive }) => {
              return isActive ? "text-pink-300 font-semibold" : "text-white hover:text-pink-300"
            }}
          >
            Reviews
          </NavLink>
        </li>
        <li>

        </li>
      </ul>
    </div>
  )
}

export default SideBar;