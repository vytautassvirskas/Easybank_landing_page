import React from "react";
import style from "./SectionIntro.module.scss";
import ButtonLink from "../ButtonLink/ButtonLink";
import SectionIntroimg from "../../assets/images/image-mockups.png";

const SectionIntro = (): JSX.Element => {
  return (
    <section className={style.section}>
      <div className={style["section__wrapper"]}>
        <h1 className={style["section__heading"]}>
          Next generation digital banking
        </h1>
        <p className={style["section__text"]}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <ButtonLink>Request Invite</ButtonLink>
      </div>
      <img
        src={SectionIntroimg}
        alt="phones"
        className={style["section__img"]}
      />
    </section>
  );
};

export default SectionIntro;
