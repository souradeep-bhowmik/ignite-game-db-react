const initialState = { gameDetails: {}, gameScreenshots: {} };

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
        gameScreenshots: action.payload.gameScreenshots,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
