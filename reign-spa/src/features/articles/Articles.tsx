import React from "react";
import { dateFormat } from "../../helpers/dates";
import { IArticles } from "../../interfaces/articles";
import { Author, Root, Rows, TitleAndTime, TrashIcon } from "./Articles.styled";
import { fetchArticlesNow } from "./slice";
import trash from "../../assets/trash.svg";
import hand from "../../assets/hand.svg";
import { useHistory } from "react-router-dom";
type props = {
  dispatch: any;
  articles: IArticles[] | null;
  deleteArticle: (id: string) => void;
};

export const Articles: React.FC<props> = ({
  dispatch,
  articles,
  deleteArticle,
}) => {
  const history = useHistory();

  const onMouseOver = (key: string) => {
    const img: HTMLElement | null = document.getElementById("img" + key);
    const div: HTMLElement | null = document.getElementById("row" + key);
    if (img) img.style.display = "block";
    if (div) div.style.backgroundColor = "#fafafa";
  };

  const onMouseLeave = (key: string) => {
    const img: HTMLElement | null = document.getElementById("img" + key);
    const div: HTMLElement | null = document.getElementById("row" + key);
    if (img) img.style.display = "none";
    if (div) div.style.backgroundColor = "#fff";
  };

  return (
    <Root>
      {articles &&
        articles.map((article, key) => (
          <Rows
            id={"row" + key + article._id}
            src={hand}
            key={key + article._id}
            onMouseOver={() => onMouseOver(key + article._id)}
            onMouseLeave={() => onMouseLeave(key + article._id)}
          >
            <div
              style={{
                display: "flex",
                width: "90vw",
                justifyContent: "space-between ",
                alignItems: "center",
              }}
              onClick={() => window.open(article.story_url || article.url)}
            >
              <div style={{ display: "flex" }}>
                <TitleAndTime>
                  {article.story_title || article.title} -
                </TitleAndTime>
                <Author>{article.author} -</Author>
              </div>
              <TitleAndTime>{dateFormat(article.created_at)}</TitleAndTime>
            </div>
            <div
              style={{
                display: "flex",
                width: "3.5vw",
                maxWidth: "3.5vw",
                margin: 0,
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TrashIcon
                id={`img${key + article._id}`}
                key={key + article._id}
                src={trash}
                onClick={() => {
                  dispatch(deleteArticle(article._id));
                  history.push("/deleted");
                }}
              />
            </div>
          </Rows>
        ))}
      {articles && articles.length === 0 && (
        <h1 style={{ alignSelf: "center" }}>Sorry There are no News</h1>
      )}
      {!articles && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ alignSelf: "center" }}>
            Api needs an 1h to get the data or you just need to add the Data
            with below Button
          </h1>
          <button
            style={{ width: "35vw" }}
            onClick={() => {
              dispatch(fetchArticlesNow());
              history.push("/getNow");
            }}
          >
            Get Articles Now
          </button>
        </div>
      )}
    </Root>
  );
};
