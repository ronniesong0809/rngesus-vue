import axios from "axios";

export function getTrending() {
  return searchGames("order_by=trending", 5);
}

export function getRecentLow() {
  return searchGames("recent_low=true", 5);
}

function searchGames(query, limit) {
  const search = query + "&limit=" + limit;
  return axios.get(
    "https://api.boardgameatlas.com/api/search?" +
      search +
      "&client_id=" +
      process.env.VUE_APP_CLIENT_ID
  );
}
