import data from "../MovieData.json";
import React from "react";

const mds = data.MovieData;

function MovieList() {
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
            {mds.map((m) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
