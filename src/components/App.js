import React, { useState, useEffect } from "react";
import "../style/App.css";
import Row from "./Row";
import requests from "../requests";
import instance from "../axios";
import MovieRow from "./MovieRow";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const API_KEY = "750f3226723243bd6b8c630e99748c05";
let type = [
  "Adventure",
  "Romance",
  "Family",
  "Horror",
  "Drama",
  "History",
  "War",
  "Western",
  "Documentary",
  "Music",
];

function App() {
  let rqst = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  type = type.sort();
  const [genre_id, setId] = useState([]);

  useEffect(() => {
    async function data() {
      let genre = [];
      let finding = await instance.get(rqst);
      let findings = finding.data.genres;
      console.log(findings);
      for (let i in findings) {
        type.map((type1) => {
          if (findings[i].name === type1) {
            genre.push(findings[i].id);
            return 0;
          }
        });
      }

      setId(genre);
    }
    data();
  }, [rqst]);

  return (
    <div className="App">
      <Navbar />
      <Banner fetch={requests.fetchOriginals} />
      <Row title="Originals" fetch={requests.fetchOriginals} poster={true} />
      <Row title="Trending" fetch={requests.fetchTrending} />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Popular" fetch={requests.fetchPopular} />
      {type.map((item, index) => (
        <MovieRow
          title={item}
          key={index}
          genre={genre_id[index]}
          api={API_KEY}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
