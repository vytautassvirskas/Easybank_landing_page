import React from "react";
import MainWrapper from "../MainWrapper/MainWrapper";
import style from "./SectionArticles.module.scss";
import MoneyImg from "../../assets/images/image-currency.jpg";
import RestaurantImg from "../../assets/images/image-restaurant.jpg";
import PlaneImg from "../../assets/images/image-plane.jpg";
import ConfettiImg from "../../assets/images/image-confetti.jpg";
import ArticleCard from "../ArticleCard/ArticleCard";

export interface ArticlesData {
  img: string;
  author: string;
  title: string;
  text: string;
}

const SectionArticles = (): JSX.Element => {
  const articlesData: ArticlesData[] = [
    {
      img: MoneyImg,
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: `The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …`,
    },
    {
      img: RestaurantImg,
      author: " By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: `Our simple budgeting feature allows you to separate out your spending and set 
      realistic limits each month. That means you …`,
    },
    {
      img: PlaneImg,
      author: " By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
      while you’re abroad. We’ll even show you …`,
    },
    {
      img: ConfettiImg,
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
      It’s easy to request an invite through the site ...`,
    },
  ];
  return (
    <section className={style.section}>
      <MainWrapper>
        <h2 className={style["section__heading"]}>Latest Articles</h2>
        <div className={style["section__articles-wrapper"]}>
          {articlesData.map((article) => (
            <ArticleCard key={article.title} article={article}></ArticleCard>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};

export default SectionArticles;
