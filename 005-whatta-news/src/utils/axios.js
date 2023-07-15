import axios from "axios";

export async function get(url, options = {}) {
  try {
    const abortController = new AbortController();
    const urlChecked = url && url[0] === "/" ? url : `/${url}`;
    const fullUrl = url.includes("http")
      ? url
      : `${import.meta.env.VITE_API_BASE_URL}${urlChecked}`;

    const params = options.params || {};

    const cache = localStorage.getItem(fullUrl);
    if (cache) {
      return JSON.parse(cache);
    }

    const res = await axios.get(fullUrl, {
      signal: abortController.signal,
      params: {
        ...params,
        access_key: import.meta.env.VITE_API_KEY,
      },
    });

    localStorage.setItem(fullUrl, JSON.stringify(res));
    return res;
  } catch (e) {
    console.error(e);
  }
}
