import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import NavBar from "../components/NavBar";
import axios from "axios";
import Article from "../components/Article";
import { Articles } from "../components/HomePageArticle";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

export type Comment = {
  id: number;
  name: string;
  comment: string;
  articleId: number;
};

export type Comments = Comment[];

export default function ArticleDetailsPage() {
  const [state, setState] = useState<Articles>();
  const [commentState, setCommentState] = useState<any>();

  const routeParam = useParams<{ articleId: string }>();
  const url = `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${routeParam.articleId}`;
  const commentUrl = url + "/comments";

  const addComment = (name: string, comment: string) => {
    const randNumber = Math.floor(Math.random() * 10001);
    const addData = {
      id: randNumber,
      name: name,
      comment: comment,
      articleId: state ? state.id : 0,
    };
    setCommentState([addData, ...commentState]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setState(response.data);
      const commentResponse = await axios.get(commentUrl);
      setCommentState(commentResponse.data);
    };
    fetchData();
  }, [routeParam.articleId]);

  return (
    <div>
      <NavBar />
      {state ? (
        <Article
          title={state.title}
          categoryId={state.categoryId}
          author={state.author}
          content={state.content}
          imgUrl={state.imgUrl}
          date={state.date}
          id={state.id}
          unixTimeStamp={state.unixTimeStamp}
        />
      ) : (
        "Loading..."
      )}
      <h2>Comments:</h2>
      {commentState
        ? commentState.map((com: any, index: number) => {
            return (
              <CommentsList
                key={index}
                id={com.id}
                name={com.name}
                comment={com.comment}
                articleId={com.articleId}
              />
            );
          })
        : ""}
      <CommentForm addComment={addComment} />
    </div>
  );
}
