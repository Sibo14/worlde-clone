import Axios from "axios";

// >> Base URL

export const baseURL = "https://wordle-today.p.rapidapi.com/";

const apiKey = "d1a4e0b469msh3ab411e36bd7d1ep111427jsne6a9a30d8dcd";
const apiHost = "wordle-today.p.rapidapi.com";

// >> Main Axios

export const axios = Axios.create();

axios.defaults.baseURL = baseURL;
axios.defaults.headers.get["X-RapidAPI-Key"] = apiKey;
axios.defaults.headers.get["X-RapidAPI-Host"] = apiHost;
axios.defaults.params({ count: "5" });
