import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ReviewForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      "https://699e877d78dda56d396a7fac.mockapi.io/review",
      {
        name: name,
        review: review,
        rating: rating,
        movieId: id
      }
    )
      .then(res => {
        toast.success('Review Added successfully');

        setName("");
        setRating("");
        setReview("");

      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="p-6 w-50 md:w-96 border bg-white md:h-90 mx-auto mb-5">

      <h1 className="text-2xl mb-4 text-pink-600 font-semibold">
        Add Review
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-3 border-pink-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="border p-2 w-full mb-3 border-pink-600 text-gray-500"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="" >Select Rating</option>
          <option value="1">1 ⭐</option>
          <option value="2">2 ⭐⭐</option>
          <option value="3">3 ⭐⭐⭐</option>
          <option value="4">4 ⭐⭐⭐⭐</option>
          <option value="5">5 ⭐⭐⭐⭐⭐</option>
        </select>

        <textarea
          placeholder="Write Review"
          className="border p-2 w-full mb-3 border-pink-600"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="flex justify-center md:mt-8">
          <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() =>
            navigate(`/dashboard/Movies/`)
          }>
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default ReviewForm;