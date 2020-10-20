import React from "react";
import { Articles } from "./articles/Articles";
import { deleteArticle } from "./articles/slice";
import { fetchArticles } from "./articles/slice";
import { Header } from "./header/header";
import { useAppDispatch, useTypedSelector } from "../app/reducer";
import { useParams } from "react-router-dom";
const HackerNews: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles } = useTypedSelector((state) => state.articles);
  const { deleted } = useParams<any>();

  React.useEffect(() => {
    dispatch<any>(fetchArticles());
  }, [dispatch, deleted]);

  return (
    <React.Fragment>
      {" "}
      <Header />
      <Articles
        dispatch={dispatch}
        articles={articles}
        deleteArticle={deleteArticle}
      />{" "}
    </React.Fragment>
  );
};

export default HackerNews;
