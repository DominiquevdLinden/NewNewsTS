import React from "react";
import { Comment } from "../pages/ArticleDetailsPage";

export default function CommentsList(props: Comment) {
  return (
    <div>
      <p>{props.name}:</p>
      <p>{props.comment}</p>
    </div>
  );
}
