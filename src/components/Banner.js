import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import img_base from "../requests";
import "../style/banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner({ fetch }) {
  const [movies, setMovies] = useState("");
  const [trailer_url, setTrailer] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      let rqst = await axios.get(fetch);
      setMovies(
        rqst?.data.results[Math.floor(Math.random() * rqst.data.results.length)]
      );
      return 0;
    };
    dataFetch();
  }, [fetch]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  let handleClick = (movies) => {
    console.log(movies);
    if (trailer_url) {
      setTrailer("");
    } else {
      movieTrailer(movies?.name || movies?.title || movies?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <header
      className="outer_banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${img_base.img_base}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movies?.name || movies?.original_name || movies?.title}
        </h1>

        <div className="button_container">
          <button
            className="button_containers"
            onClick={() => handleClick(movies)}
          >
            Play
          </button>
          <button className="button_containers">My List</button>
        </div>
        <h2 className="description">
          {movies?.overview
            ? movies?.overview.slice(0, 160) + "..."
            : movies?.overview}
        </h2>
      </div>
      <div className="banner_fade"></div>
      {trailer_url && <YouTube videoId={trailer_url} opts={opts} />}
    </header>
  );
}

Banner.propTypes = {
  fetch: PropTypes.string.isRequired,
};

export default Banner;
