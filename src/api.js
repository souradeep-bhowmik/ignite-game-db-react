//  Base URL for the API
const BASE_URL = "https://rawg-video-games-database.p.rapidapi.com/";
const API_KEY = "df501b1aa1msh9951eb9f33bd935p19875djsnf7106a3a011b";

//  Getting Dates for date-based-filtering from the API
const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
const currentDay = String(new Date().getDate()).padStart(2, "0");
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//  Popular games
const POPULAR_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
