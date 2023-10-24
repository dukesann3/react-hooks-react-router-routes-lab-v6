import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);
  const actorsApi = 'http://localhost:4000/actors';
  //return id, movies(arr), and name.

  useEffect(() => {
    fetch(actorsApi)
      .then(response => response.json())
      .then((data) => {
        setActors(data);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      })
  }, []);

  if (!actors) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => {
          return (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => {
                  return <li key={actor.id + movie}>{movie}</li>
                })}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
