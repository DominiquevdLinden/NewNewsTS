import React from "react";
import { Articles } from "./HomePageArticle";
import { Link } from "react-router-dom";

export default function Article(props: Articles) {
  return (
    <div>
      {
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{props.title}</h1>
          <p>Author: {props.author}</p>
          <Link to={`/categories/${props.categoryId}`}>
            <p>Category: {props.categoryId}</p>
          </Link>
          <img
            style={{ maxWidth: 400, maxHeight: 400 }}
            src={props.imgUrl}
            alt={props.title}
          ></img>
          <Link to={`/articles/${props.id}`}>
            <button>Read this article</button>
          </Link>
        </div>
      }
    </div>
  );
}
