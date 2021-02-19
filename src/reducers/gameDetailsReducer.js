const initialState = {
  gameDetails: { platforms: [] },
  gameScreenshots: [],
  isLoading: true,
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
        gameScreenshots: action.payload.gameScreenshots,
        isLoading: false,
      };
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
