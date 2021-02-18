import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
  const gameDetailsData = await axios.get(gameDetailsURL(id));
  console.log(gameDetailsData);
  dispatch({
    type: "GET_DETAILS",
    payload: {
      gameDetails: gameDetailsData.data,
    },
  });
};
