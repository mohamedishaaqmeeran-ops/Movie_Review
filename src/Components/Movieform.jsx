import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Movieform = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [movie, setMovie] = useState('');

    useEffect(() => {

        axios
            .get(`https://699e877d78dda56d396a7fac.mockapi.io/movie/${id}`)
            .then(res => {
                setMovie(res.data);
            });

    }, [id]);

    if (!movie) {
        return "Loading Details";
    }

    return (
        <div className="p-1 md:p-6 flex flex-col w-50 sm:w-80 md:w-96 bg-white h-80  md:h-60 mx-auto mt-4 mb-4 rounded-lg">

            <h1 className="text-lg  md:text-xl lg:text-2xl font-bold mb-3  text-pink-600">
                Movie Name : {movie.name}
            </h1>

            <p className="mb-3 text-pink-950">
                Genre : {movie.description}
            </p>

            <p className="text-sm text-pink-950 mb-4">
                Release Date : {new Date(movie.date).toLocaleDateString("en-GB")}
            </p>

            <div className="flex justify-center mt-22 sm:mt-5">
                <button
                    className="bg-pink-600 text-white px-4 py-2 rounded"
                    onClick={() =>
                        navigate(`/dashboard/Movies/${id}/review`)
                    }
                >
                    Add Review
                </button>
            </div>

        </div>
    );
};

export default Movieform;