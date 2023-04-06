import { Movie } from "../types/film";
import { useEffect, useState } from "react";
import React from "react";

function FilmList() {
  const [filmData, setFilmData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFilm = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setFilmData(
        temp
          .filter((m: { edited: string }) => m.edited === "Yes")
          .sort((a: { title: string }, b: { title: any }) =>
            a.title.localeCompare(b.title),
          ),
      );
    };
    fetchFilm();
  }, []);

  return (
    <>
      <div>
        <h3>Joel Hiltons Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {filmData.map((m) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FilmList;
