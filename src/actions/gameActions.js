import axios from "axios";
import { popularGamesURL } from "../api";

//Action creator
export const loadGames = () => async (dispatch) => {
  const popularGameData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameData,
    },
  });
};
