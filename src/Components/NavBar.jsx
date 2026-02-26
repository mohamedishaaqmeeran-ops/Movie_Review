import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow">

            <h1 className="text-2xl font-bold text-pink-600">
                🎬 MovieReview
            </h1>

            <ul className="flex gap-20">

                <li>
                    <Link
                        className="hover:bg-pink-700 hover:text-white hover:border-2 hover:p-2 text-pink-600"
                        to="/"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        className="hover:bg-pink-700 hover:text-white hover:border-2 hover:p-2 text-pink-600"
                        to="/register"
                    >
                        Register
                    </Link>
                </li>

                <li>
                    <Link
                        className="hover:bg-pink-700 hover:text-white hover:border-2 hover:p-2 text-pink-600"
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