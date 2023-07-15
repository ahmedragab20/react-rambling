import { useEffect, useState } from "react";
import { get } from "../../utils/axios";

export default function useNews() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await get("/news");

      setNews(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (news.length) return;
    (async () => {
      await fetchNews();
    })();
  }, []);

  return { news };
}
