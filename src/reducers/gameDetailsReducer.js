const initialState = { gameDetails: [] };

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
