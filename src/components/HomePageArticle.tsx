import axios from "axios";
import { useEffect, useState } from "react";

type Articles = {
  id: number;
  title: string;
  author: string;
  content: string;
  categoryId: string;
  unixTimeStamp: number;
  date: string;
  imgUrl: string;
};

export default function HomePageArticle() {
  const [state, setState] = useState<Articles>();

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles";

      const result = await axios.get(url);

      const articlesSorted = [...result.data].sort((a, b) => {
        return b.unixTimeStamp - a.unixTimeStamp;
      });

      const newestArticle = articlesSorted[0];

      console.log(newestArticle);
      setState(newestArticle);
    };
    fetchData();
  }, []);

  return (
    <div>
      {state ? (
        <div>
          <h1>{state.title}</h1>
          <p>A uthor: {state.author}</p>
          <p>Category: {state.categoryId}</p>
          <img src={state.imgUrl}></img>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
