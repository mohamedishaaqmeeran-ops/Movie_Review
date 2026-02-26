import { useEffect, useState } from "react";
import axios from "axios";

const Reviewlist = () => {

    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        axios.get(
            "https://699e877d78dda56d396a7fac.mockapi.io/movie"
        )
            .then(res => {
                setMovies(res.data);
            });
        axios.get(
            "https://699e877d78dda56d396a7fac.mockapi.io/review"
        )
            .then(res => {
                setReviews(res.data);
            });

    }, []);


    return (

        <div className="p-5 pr-0 w-100 bg-pink-600 min-h-screen">

            <h2 className="text-xl mb-4 font-bold text-white">
                All Movie Reviews 🎬
            </h2>


            {
                movies.map(movie => {

                    const movieReviews =
                        reviews.filter(
                            r => String(r.movieId) === String(movie.id)
                        );

                    return (

                        <div key={movie.id}
                            className="mb-4 border p-2 mr-5 bg-white rounded-lg">

                            <h3 className="font-bold text-lg text-pink-500">
                                Movie Name : {movie.name}<hr></hr>
                            </h3>


                            {
                                movieReviews.length === 0 ?

                                    <p className="text-pink-950">
                                        No Reviews
                                    </p>

                                    :

                                    movieReviews.map(r => (
                                        <p className="text-pink-950" key={r.id}>
                                            username : {r.name}<br></br>
                                            Rating : {r.rating}<hr></hr>
                                            Review : {r.review}<hr></hr>
                                        </p>

                                    ))

                            }

                        </div>

                    )

                })

            }


        </div>

    )

}

export default Reviewlist;