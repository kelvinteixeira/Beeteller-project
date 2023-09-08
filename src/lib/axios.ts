import axios from "axios";

export const BASE_URL = "https://apimocha.com/beeteller/";

export const api = axios.create({
  baseURL: BASE_URL,
});
