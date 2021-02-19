import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GameDetails = () => {
  const { gameDetails, gameScreenshots } = useSelector(
    (state) => state.details
  );
  // console.log(gameScreenshots.length);
  return (
    <CardShadow>
      <Details>
        <div className="stats">
          <div className="rating">
            <h3>{gameDetails.name}</h3>
            <p>Rating: {gameDetails.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {gameDetails.platforms &&
                gameDetails.platforms.map((data) => {
                  return <h3 key={data.platform.id}>{data.platform.name}</h3>;
                })}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={gameDetails.background_image} alt="pic" />
        </div>
        <div className="description">
          <p>{gameDetails.description_raw}</p>
        </div>
        <div className="gallery">
          {gameScreenshots.length !== undefined &&
            gameScreenshots.map((screenShot) => {
              return (
                <img src={screenShot.image} key={screenShot.id} alt="game" />
              );
            })}
        </div>
      </Details>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDetails;
