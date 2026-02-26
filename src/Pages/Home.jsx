const Home = () => {
    return (
        <div className="p-10">

            <h1 className="text-4xl font-bold text-pink-600 mb-4">
                🎬 Movie Review System
            </h1>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">By Ishaaq</h2>
            <p className="text-lg mb-6">
                Welcome to the Movie Review System. This application allows users to
                explore movies, view movie details and share their reviews and ratings.
            </p>

            <h2 className="text-2xl font-semibold text-pink-600 mb-3">
                Features
            </h2>

            <ul className="list-disc ml-6 mb-6 text-lg">
                <li> Search movies by name</li>
                <li> Filter movies by release date</li>
                <li> Sort movies by date</li>
                <li> View movie details</li>
                <li> Add movie reviews and ratings</li>
                <li> View all reviews</li>
            </ul>

            <h2 className="text-2xl font-semibold text-pink-600 mb-3">
                About Project
            </h2>

            <p className="text-lg">
                This Movie Review System is developed using React.js and MockAPI.
                It allows users to browse movies and share their opinions through
                reviews and ratings.
            </p>

        </div>
    );
};

export default Home;