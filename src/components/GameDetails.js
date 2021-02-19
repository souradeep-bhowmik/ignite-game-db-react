import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const GameDetails = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.details
  );
  // console.log(gameScreenshots.length);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Details>
            <Stats>
              <div className="rating">
                <h3>{gameDetails.name}</h3>
                <p>Rating: {gameDetails.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetails.platforms &&
                    gameDetails.platforms.map((data) => {
                      return (
                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                      );
                    })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={gameDetails.background_image} alt="pic" />
            </Media>
            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {gameScreenshots.length !== undefined &&
                gameScreenshots.map((screenShot) => {
                  return (
                    <img
                      src={screenShot.image}
                      key={screenShot.id}
                      alt="game"
                    />
                  );
                })}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
