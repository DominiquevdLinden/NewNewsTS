import React from "react";
import { Articles } from "./HomePageArticle";
import { Link } from "react-router-dom";
import "./Article.css";

export default function Article(props: Articles) {
  return (
    <div>
      {
        <div>
          <h1>{props.title}</h1>
          <p>Author: {props.author}</p>
          <Link to={`/categories/${props.categoryId}`}>
            <p>Category: {props.categoryId}</p>
          </Link>
          <img src={props.imgUrl} alt={props.title}></img>
          <p>{props.content}</p>
        </div>
      }
    </div>
  );
}
