import React, { useState } from "react";
import "./CommentForm.css";

type Props = {
  addComment: (name: string, comment: string) => void;
};

export default function CommentForm(props: Props) {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const onSubmitComment = (e: any) => {
    e.preventDefault();
    props.addComment(name ? name : "", comment ? comment : "");
    setName("");
    setComment("");
  };

  return (
    <div>
      <h2>Comment form:</h2>
      <form onSubmit={onSubmitComment}>
        Name:{" "}
        <input
          type="text"
          value={name}
          className="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <br></br>
        Comment:{" "}
        <input
          type="text"
          value={comment}
          className="comment"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit" value={name}>
          Post
        </button>
      </form>
    </div>
  );
}
