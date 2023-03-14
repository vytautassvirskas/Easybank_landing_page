import React from "react";
import style from "./Header.module.scss";
import ButtonLink from "../atoms/ButtonLink/ButtonLink";
import MainWrapper from "../MainWrapper/MainWrapper";
import CompanyLogo from "../atoms/CompanyLogo/CompanyLogo";

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
          <CompanyLogo></CompanyLogo>
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
