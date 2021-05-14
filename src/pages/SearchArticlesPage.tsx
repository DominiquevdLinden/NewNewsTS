import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import HomePageArticle, { Articles } from "../components/HomePageArticle";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Article from "../components/Article";

export default function SearchArticlesPage() {
  const [state, setState] = useState<Articles[]>();
  const [searchText, setSearchText] = useState<string>();

  const routeParam = useParams<{ searchText: string }>();

  const history = useHistory();

  const navigateToSearch = () => {
    history.push(`/search/${searchText}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!routeParam.searchText) {
        return;
      }

      const url =
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles";

      const result = await axios.get(url);

      if (!routeParam.searchText) {
        setState(result.data);
      } else {
        const filteredResult = result.data.filter((r: Articles) => {
          if (
            r.title
              .toLowerCase()
              .includes(routeParam.searchText.toLowerCase()) ||
            r.author
              .toLowerCase()
              .includes(routeParam.searchText.toLowerCase()) ||
            r.categoryId
              .toLowerCase()
              .includes(routeParam.searchText.toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });
        setState(filteredResult);
      }
    };
    fetchData();
  }, [routeParam.searchText]);

  console.log(state);

  return (
    <div>
      <NavBar />({state ? state.length : ""})
      <input
        type="text"
        placeholder={routeParam.searchText}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button onClick={navigateToSearch}>Search!</button>
      <br></br>
      {state
        ? state.map((art, index) => {
            return (
              <Article
                key={index}
                title={art.title}
                categoryId={art.categoryId}
                author={art.author}
                content={art.content}
                imgUrl={art.imgUrl}
                date={art.date}
                id={art.id}
                unixTimeStamp={art.unixTimeStamp}
              />
            );
          })
        : "Loading..."}
    </div>
  );
}
