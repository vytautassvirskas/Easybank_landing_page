import React from "react";
import style from "./FeatureCard.module.scss";
import { CardData } from "../SectionFeatures/SectionFeatures";

interface FeatureCardProps {
  key: string;
  data: CardData;
}

const FeatureCard = ({ data }: FeatureCardProps) => {
  return (
    <div className={style.card}>
      <img src={data.img} alt="icon" className={style["card__img"]} />
      <h3 className={style["card__heading"]}>{data.title}</h3>
      <p className={style["card__text"]}>{data.text}</p>
    </div>
  );
};

export default FeatureCard;
