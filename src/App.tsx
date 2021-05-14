import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import SearchArticlesPage from "./pages/SearchArticlesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/articles/:articleId"
            component={ArticleDetailsPage}
          ></Route>
          <Route
            path="/categories/:categoryId"
            component={CategoriesPage}
          ></Route>
          <Route path="/articles" component={SearchArticlesPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
