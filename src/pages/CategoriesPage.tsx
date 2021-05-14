import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import { Articles } from "../components/HomePageArticle";
import CategoryArticles from "../components/CategoryArticles";

export default function CategoriesPage() {
  const [articles, setArticles] = useState<Articles[]>();

  const category = useParams<{ categoryId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/${category.categoryId}/articles`;

      const response = await axios.get(url);

      setArticles(response.data);
    };
    fetchData();
  }, [category.categoryId]);

  return (
    <div>
      <NavBar />
      <h1>{category.categoryId}</h1>
      {articles
        ? articles.map((art, index) => {
            return (
              <CategoryArticles
                key={index}
                title={art.title}
                imgUrl={art.imgUrl}
                unixTimeStamp={art.unixTimeStamp}
                content={art.content}
                author={art.author}
                categoryId={art.categoryId}
                date={art.date}
                id={art.id}
              />
            );
          })
        : ""}
    </div>
  );
}
