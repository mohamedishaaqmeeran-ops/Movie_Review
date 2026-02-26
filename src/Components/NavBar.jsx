import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-2 bg-white shadow">

            <h1 className="text-md sm:text-2xl font-bold text-pink-600">
                🎬 MovieReview
            </h1>

            <ul className="flex gap-2 sm:gap-20">

                <li>
                    <Link
                        className="p-2 hover:bg-pink-700 hover:text-white  text-pink-600"
                        to="/"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        className="p-2 hover:bg-pink-700 hover:text-white  text-pink-600"
                        to="/register"
                    >
                        Register
                    </Link>
                </li>

                <li>
                    <Link
                        className="p-2 hover:bg-pink-700 hover:text-white text-pink-600"
                        to="/login"
                    >
                        Login
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default NavBar;