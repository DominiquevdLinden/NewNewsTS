import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type Articles = {
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{state.title}</h1>
          <p>Author: {state.author}</p>
          <Link to={`/categories/${state.categoryId}`}>
            <p>Category: {state.categoryId}</p>
          </Link>
          <img
            style={{ maxWidth: 400, maxHeight: 400 }}
            src={state.imgUrl}
          ></img>
          <Link to={`/articles/${state.id}`}>
            <button>Read this article</button>
          </Link>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
