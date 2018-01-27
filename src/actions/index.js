import axios from "axios";
import { FETCH_RECENT, FETCH_ALLTIME } from "./types";

const ROOT_URL = "https://fcctop100.herokuapp.com/api/fccusers/top";

function fetchRecent() {
  const url = `${ROOT_URL}/recent`;

  const request = axios.get(url);

  return {
    type: FETCH_RECENT,
    payload: request
  };
}

function fetchRecent() {
  const url = `${ROOT_URL}/alltime`;

  const request = axios.get(url);

  return {
    type: FETCH_ALLTIME,
    payload: request
  };
}
