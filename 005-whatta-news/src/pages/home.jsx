// import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import useNews from "../composables/apis/useNews";

export default function Home() {
  const { news } = useNews();
  return (
    <div>
      <div>
        {news.map((item) => (
          <NewsCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
