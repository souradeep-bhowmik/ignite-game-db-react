import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

//Action creator
export const loadGames = () => async (dispatch) => {
  const popularGameData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameData.data.results,
      upcoming: upcomingGamesData.data.results,
      new: newGamesData.data.results,
    },
  });
};
