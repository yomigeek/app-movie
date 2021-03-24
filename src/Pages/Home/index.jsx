import React from "react";
import MovieTile from "../../assets/images/movie-tile.jpg";
import SeriesTile from "../../assets/images/series-tile.jpg";

const Home = () => {
    const tiles = [
        {id: "1t", url: "#", iconImg: MovieTile},
        {id: "2t", url: "#", iconImg: SeriesTile},
      ];
  return (
    <>
    {tiles.map((tile) => {
        return <div></div>
    })

    }
    </>
  );
};

export default Home;
