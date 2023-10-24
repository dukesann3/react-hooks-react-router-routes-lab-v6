import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const params = useParams();
  const movieId = params.id;

  const [movie, setMovie] = useState({});
  const movieAPI = `http://localhost:4000/movies/${movieId}`;

  useEffect(()=>{
    fetch(movieAPI)
    .then(response => response.json())
    .then((data) => {
      setMovie(data);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
  },[]);

  if(!movie.id){
    return <h2>Loading...</h2>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre) => {
          return <span key={movie.title + genre}>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
