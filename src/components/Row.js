import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import "../style/row.css";
import imgBase from "../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetch, poster }) {
  const [movies, setMovies] = useState([]);
  const [trailer_url, setTrailer] = useState("");
  const img_base = imgBase.img_base;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(fetch);
      setMovies(result.data.results);
      return result;
    }
    fetchData();
  }, [fetch, img_base]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movies) => {
    if (trailer_url) {
      setTrailer("");
    } else {
      movieTrailer(movies?.name || movies?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

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
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
      {trailer_url && <YouTube videoId={trailer_url} opts={opts} />}
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetch: PropTypes.string.isRequired,
  poster: PropTypes.bool.isRequired,
};

export default Row;
