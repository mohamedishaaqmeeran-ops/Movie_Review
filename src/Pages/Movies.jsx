import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [dateFilter, setDateFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        axios.get("https://699e877d78dda56d396a7fac.mockapi.io/movie")
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="sm:p-5">

            <h2 className="text-lg font-bold text-pink-600">Search</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">

                <input
                    type="text"
                    placeholder="Search movies..."
                    className="border border-pink-300 p-2 w-50 bg-white rounded-lg"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <input
                    type="date"Date
                    placeholder=""
                    className="border border-pink-300 p-2 w-50 bg-white rounded-lg text-gray-500"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                />

                <select
                    className="border border-pink-300 p-2 w-50 bg-white rounded-lg text-gray-500"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort By Date</option>
                    <option value="new">Newest First</option>
                    <option value="old">Oldest First</option>
                </select>

            </div>

            <h1 className="text-3xl mb-6 mt-5 font-bold text-pink-600">
                Movies 🎬
            </h1>
            <Outlet />
            <div className="flex gap-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        movies
                            .filter(movie =>
                                movie.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .filter(movie =>
                                dateFilter === "" ||
                                movie.date.slice(0, 10) === dateFilter
                            )
                            .sort((a, b) => {

                                if (sortOrder === "new") {
                                    return new Date(b.date) - new Date(a.date);
                                }

                                if (sortOrder === "old") {
                                    return new Date(a.date) - new Date(b.date);
                                }

                                return 0;

                            })
                            .map(movie => (

                                <Link
                                    key={movie.id}
                                    to={`/dashboard/Movies/${movie.id}`}
                                    className="border p-2 bg-white w-50 sm:w-auto border-pink-500 transition-transform duration-300 hover:scale-105 "
                                >

                                    <img
                                        src={movie.poster}
                                        alt={movie.name}
                                        className="w-80 h-56 object-cover mb-2"
                                    />

                                    <h2 className="text-lg font-semibold text-center text-pink-600">
                                        Movie Name : {movie.name}
                                    </h2>

                                    <br />

                                    <h4 className="text-sm text-left text-pink-950">
                                        Genre : {movie.description}
                                    </h4>



                                    <h4 className="text-sm text-left text-pink-950">
                                        Release Date : {new Date(movie.date).toLocaleDateString("en-GB")}
                                    </h4><br />
                                    <p className="text-pink-500 text-xs italic text-center">Click me to add reviews</p>
                                </Link>

                            ))
                    }

                </div>



            </div>

        </div>
    )
}

export default Movies;