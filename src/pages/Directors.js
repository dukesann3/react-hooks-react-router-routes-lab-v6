import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([]);

  const directorsApi = 'http://localhost:4000/directors';
  //returns back id, name, and movies(arr)

  useEffect(() => {
    fetch(directorsApi)
      .then(response => response.json())
      .then((data) => {
        setDirectors(data);
      })
  }, []);

  if (!directors) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>{
                director.movies.map((movie) => {
                  return <li key={director.name + movie}>{movie}</li>
                })
              }</ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
