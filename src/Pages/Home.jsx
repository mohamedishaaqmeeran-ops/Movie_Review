const Home = () => {
  return (
    <div className="min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-600 mb-3 drop-shadow-lg">
          Movie Review System
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 italic">
          By Ishaaq
        </h2>
      </div>
      <div className="flex justify-center mb-10">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.QMyYi3afc7PrJCt1BF0QuQHaEK?pid=Api&P=0&h=180"
          alt="movies"
          className="rounded-3xl shadow-2xl w-[700px] h-[300px] object-cover hover:scale-105 transition"
        />
      </div>

      <div className="bg-white p-8 rounded-3xl mb-10">
        <p className="text-lg text-gray-700 text-center">
          Welcome to the{" "}
          <span className="font-bold text-pink-600 italic">
            Movie Review System
          </span>
          . This application allows users to explore movies, view movie details
          and share reviews and ratings.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl hover:-translate-y-2 transition font-semibold">
          Search Movies
          <p className="text-gray-600 mt-2">
            Find movies quickly using search.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl hover:-translate-y-2 transition font-semibold">
          Filter Movies
          <p className="text-gray-600 mt-2">Filter movies by release date.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl hover:-translate-y-2 transition font-semibold">
          Sort Movies
          <p className="text-gray-600 mt-2">Sort movies easily by date.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl hover:-translate-y-2 transition font-semibold">
          Movie Details
          <p className="text-gray-600 mt-2">View complete movie information.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl   hover:-translate-y-2 transition font-semibold">
          Add Reviews
          <p className="text-gray-600 mt-2">
            Share your opinions with ratings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl hover:-translate-y-2 transition font-semibold">
          View Reviews
          <p className="text-gray-600 mt-2">See reviews from other users.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">About Project</h2>

        <p className="text-lg text-gray-700 ">
          This Movie Review System is developed using
          <span className="font-bold text-pink-600 italic"> React.js </span>
          and
          <span className="font-bold text-pink-600 italic"> MockAPI </span>. It
          allows users to browse movies and share opinions through reviews and
          ratings.
        </p>
      </div>
    </div>
  );
};

export default Home;
