import React from "react";
import style from "./SectionIntro.module.scss";
import ButtonLink from "../atoms/ButtonLink/ButtonLink";
import SectionIntroimg from "../../assets/images/image-mockups.png";
import MainWrapper from "../MainWrapper/MainWrapper";

const SectionIntro = (): JSX.Element => {
  return (
    <section className={style.section}>
      <MainWrapper
        style={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <div className={style["section__text-wrapper"]}>
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
      </MainWrapper>
    </section>
  );
};

export default SectionIntro;
