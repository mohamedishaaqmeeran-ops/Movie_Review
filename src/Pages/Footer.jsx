import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white ">

            <div className="grid grid-col-1 md:grid-cols-3 gap-8 p-10">

                <div>
                    <h2 className="text-2xl font-bold text-pink-400 mb-3">
                        🎬 Movie Review
                    </h2>

                    <p className="text-gray-300 leading-7">
                        Movie Review System allows users to explore movies,
                        read reviews and share ratings. Built using React
                        and MockAPI for learning purposes.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-pink-400 mb-3">
                        Quick Links
                    </h2>

                    <ul className="flex flex-col space-y-2 text-gray-300">
                        <Link
                            to="/"
                            className="hover:text-pink-400"
                        >
                            Home
                        </Link>
                        <Link
                            to="/dashboard/Movies"
                            className="hover:text-pink-400"
                        >
                            Movies
                        </Link>

                        <Link
                            to={`/dashboard/reviews/`}
                            className="hover:text-pink-400"
                        >
                            Reviews
                        </Link>



                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-pink-400 mb-3">
                        Contact
                    </h2>

                    <p className="text-gray-300 mb-2">
                        ish@gmail.com
                    </p>

                    <p className="text-gray-300">
                     +91 12345 67890
                    </p>

                </div>

            </div>
            <div className="bg-pink-700 text-center p-4">

                <p className="text-gray-900">
                    © 2026 Movie Review System | All Rights Reserved
                </p>

            </div>

        </footer>
    );
};

export default Footer;