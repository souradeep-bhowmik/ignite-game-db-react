import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
  const gameDetailsData = await axios.get(gameDetailsURL(id));
  const gameScreenshotsData = await axios.get(gameScreenShotsURL(id));
  console.log(gameDetailsData);
  dispatch({
    type: "GET_DETAILS",
    payload: {
      gameDetails: gameDetailsData.data,
      gameScreenshots: gameScreenshotsData.data,
    },
  });
};
