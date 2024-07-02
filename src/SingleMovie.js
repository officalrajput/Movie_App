import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  if (isError.show) {
    return (
      <section className="movie-section">
        <div className="error">{isError.msg}</div>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie?.Poster || "default-poster.jpg"} alt={movie?.Title || "Movie Poster"} />
        </figure>
        <div className="card-content">
          <p className="title">{movie?.Title || "No Title Available"}</p>
          <p className="card-text">{movie?.Released || "N/A"}</p>
          <p className="card-text">{movie?.Genre || "N/A"}</p>
          <p className="card-text">{movie?.imdbRating ? `${movie.imdbRating} / 10` : "N/A"}</p>
          <p className="card-text">{movie?.Country || "N/A"}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
