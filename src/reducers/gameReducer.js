const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

export default gameReducer;
