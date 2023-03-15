import React from "react";
import style from "./ArticleCard.module.scss";
import { ArticlesData } from "../../organisms/SectionArticles/SectionArticles";

interface ArticlesDataProps {
  key: string;
  article: ArticlesData;
}

const ArticleCard = ({ article }: ArticlesDataProps): JSX.Element => {
  return (
    <article className={style.article}>
      <img src={article.img} alt="icon" className={style["article__img"]} />
      <div className={style["article__text-wrapper"]}>
        <address className={style["article__author"]}>{article.author}</address>
        <h3 className={style["article__heading"]}>{article.title}</h3>
        <p className={style["article__text"]}>{article.text}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
