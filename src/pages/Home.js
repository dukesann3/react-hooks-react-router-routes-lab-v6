import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([]);
  //gives back id, genre(arr), time, title

  const movieAPI = 'http://localhost:4000/movies';


  useEffect(() => {
    fetch(movieAPI)
      .then(response => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log(error);
        throw error
      })
  }, []);

  if (!movies) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </main>
    </>
  );
};

export default Home;
