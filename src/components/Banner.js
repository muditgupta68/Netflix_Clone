import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../axios";
import img_base from "../requests";
import "../style/banner.css";

function Banner({ fetch }) {
  const [movies, setMovies] = useState("working");

  useEffect(() => {
    const dataFetch = async () => {
      let rqst = await axios.get(fetch);
      setMovies(
        rqst?.data.results[
          Math.floor(Math.random() * rqst.data.results.length - 1)
        ]
      );
      return rqst;
    };
    dataFetch();
  }, [fetch]);

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
          {movies?.original_name || movies?.name || movies?.title}
        </h1>

        <div className="button_container">
          <button className="button_containers">Play</button>
          <button className="button_containers">My List</button>
        </div>
        <h2 className="description">
          {movies?.overview
            ? movies?.overview.slice(0, 160) + "..."
            : movies?.overview}
        </h2>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

Banner.propTypes = {};

export default Banner;
