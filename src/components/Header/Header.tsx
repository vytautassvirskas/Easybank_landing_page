import React from "react";
import style from "./Header.module.scss";
import companyLogo from "../../assets/images/logo.svg";
import ButtonLink from "../ButtonLink/ButtonLink";
import MainWrapper from "../MainWrapper/MainWrapper";

const Header = (): JSX.Element => {
  const navNames: string[] = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <header className={style.header}>
      <MainWrapper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <>
          <img src={companyLogo} alt="company-logo" />
          <nav className={style.nav}>
            <ul className={style["nav__list"]}>
              {navNames.map(
                (item: string): React.ReactNode => (
                  <li className={style["nav__item"]} key={item}>
                    <a href="#" className={style["nav__link"]}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <ButtonLink>Request Invite</ButtonLink>
        </>
      </MainWrapper>
    </header>
  );
};

export default Header;
