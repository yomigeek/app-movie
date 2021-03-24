import React from "react";
import MovieTile from "../../assets/images/movie-tile.jpg";
import SeriesTile from "../../assets/images/series-tile.jpg";
import {TilesWrapper} from "./styles";

const Home = ({history}) => {
  const tiles = [
    {id: "2t", url: "/series", iconImg: SeriesTile, text: "Popular Series"},
    {id: "1t", url: "/movies", iconImg: MovieTile, text: "Popular Movies"},
  ];
  return (
    <>
      <TilesWrapper>
        {tiles.map((tile) => {
          return (
            <div key={tile.id} onClick={() => history.push(tile.url)}>
              <img
                src={tile.iconImg}
                alt="img"
                onClick={() => history.push(tile.url)}
              />
              <span>{tile.text}</span>
            </div>
          );
        })}
      </TilesWrapper>
    </>
  );
};

export default Home;
