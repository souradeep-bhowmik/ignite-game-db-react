//  Base URL for the API
const BASE_URL = "https://rawg-video-games-database.p.rapidapi.com/";
export const API_KEY = "df501b1aa1msh9951eb9f33bd935p19875djsnf7106a3a011b";

//  Getting system dates for date-based-filtering from the API
const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
const currentDay = String(new Date().getDate()).padStart(2, "0");
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//  Popular games
const POPULAR_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;

//  Upcoming games
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;

//  New games
const NEW_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;
