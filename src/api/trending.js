import axios from "axios";

export function getTrending(order_by, limit) {
  const query = "order_by=" + order_by + "&limit=" + limit;
  return axios.get(
    "https://api.boardgameatlas.com/api/search?" +
      query +
      "&client_id=" +
      process.env.VUE_APP_CLIENT_ID
  );
}
