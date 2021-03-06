import React, { useEffect } from "react";
import GameDetails from "../components/GameDetails";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  if (!pathId) {
    document.body.style.overflow = "auto";
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      {pathId && <GameDetails />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            short_screenshots={game.short_screenshots}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popularGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            short_screenshots={game.short_screenshots}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            short_screenshots={game.short_screenshots}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5 rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
