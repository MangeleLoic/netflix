import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = function () {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null); 

  useEffect(() => {
    // Esegui la richiesta per ottenere i dettagli del film
    fetch(`http://www.omdbapi.com/?i=${params.movieId}&apikey=d0102727`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [params.movieId]);

  return (
    <div className="container my-4">
      {movie ? (
        <>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
