import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../actions/gameDetailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id, short_screenshots }) => {
  const dispath = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispath(loadGameDetails(id, short_screenshots));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name}></img>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
