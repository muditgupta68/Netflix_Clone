import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import "../style/row.css";
import imgBase from "../requests";

function Row({ title, fetch, poster }) {
  const [movies, setMovies] = useState([]);
  const img_base = imgBase.img_base;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(fetch);
      setMovies(result.data.results);
      return result;
    }
    fetchData();
  }, [fetch, img_base]);

  //   console.table(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_drive">
        {movies.map((item) => (
          <img
            key={item.id}
            className={`row_poster ${poster && "row_poster_large"}`}
            src={`${img_base}${poster ? item.poster_path : item.backdrop_path}`}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string,
};

export default Row;
