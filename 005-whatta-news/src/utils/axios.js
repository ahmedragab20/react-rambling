import axios from "axios";

export async function get(url, params) {
  let fullUrl = url.includes("http") ? url : process.env.VITE_BASE_URL + url;
  let headers = url.includes("http")
    ? {}
    : { "X-API-KEY": process.env.VITE_API_KEY };

  return await axios.get(fullUrl, {
    params,
    headers,
  });
}
