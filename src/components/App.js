import React, { useState, useEffect } from "react";
import "../style/App.css";
import Row from "./Row";
import requests from "../requests";
import instance from "../axios";
import MovieRow from "./MovieRow";
import Banner from "./Banner";

const API_KEY = "750f3226723243bd6b8c630e99748c05";
let type = ["Adventure", "Romance", "Family", "Horror", "Drama"];

function App() {
  let rqst = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  type = type.sort();
  const [genre_id, setId] = useState([]);

  useEffect(() => {
    async function data() {
      let genre = [];
      let finding = await instance.get(rqst);
      let findings = finding.data.genres;
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
      <header className="App-header">
        <Banner fetch={requests.fetchOriginals} />
        <Row title="Trending" fetch={requests.fetchTrending} poster={true} />
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
      </header>
    </div>
  );
}

export default App;
