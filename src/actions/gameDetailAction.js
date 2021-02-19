import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadGameDetails = (id, short_screenshots) => async (dispatch) => {
  const gameDetailsData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      gameDetails: gameDetailsData.data,
      gameScreenshots: short_screenshots,
    },
  });
};
