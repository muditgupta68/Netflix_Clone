import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import "../style/row.css";
import imgBase from "../requests";

function MovieRow({ title, genre, api }) {
  const [genreMovie, setMovie] = useState([]);

  const rqst = `/discover/movie?api_key=${api}&with_genres=${genre}`;
  const img_base = imgBase.img_base;

  useEffect(() => {
    async function movieList() {
      let final = await axios.get(rqst);
      setMovie(final?.data.results);
      return final;
    }
    movieList();
  }, [rqst, img_base]);

  return (
    <div>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_drive">
          {genreMovie.map((e) => (
            <img
              key={e.id}
              className="row_poster"
              src={img_base + e.backdrop_path}
              alt={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

MovieRow.propTypes = {};

export default MovieRow;
