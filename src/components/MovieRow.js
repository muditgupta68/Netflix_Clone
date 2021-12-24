import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import "../style/row.css";
import imgBase from "../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieRow({ title, genre, api }) {
  const [genreMovie, setMovie] = useState([]);
  const [trailer_url, setTrailer] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (genreMovie) => {
    if (trailer_url) {
      setTrailer("");
    } else {
      movieTrailer(genreMovie?.name || genreMovie?.title || "")
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
        {genreMovie.map((e) => (
          <img
            key={e.id}
            className="row_poster"
            src={img_base + e.backdrop_path}
            alt={title}
            onClick={() => handleClick(e)}
          />
        ))}
      </div>
      {trailer_url && <YouTube videoId={trailer_url} opts={opts} />}
    </div>
  );
}

MovieRow.propTypes = {};

export default MovieRow;
