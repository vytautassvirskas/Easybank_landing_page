import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import CompanyLogo from "../../atoms/CompanyLogo/CompanyLogo";
import HamburgerBtn from "../../atoms/HamburgerBtn/HamburgerBtn";

export const navNames: string[] = [
  "Home",
  "About",
  "Contact",
  "Blog",
  "Careers",
];

const Header = (): JSX.Element => {
  const [isMobileNavOn, setIsMobileNavOn] = useState<boolean>(false);
  const navClassName = isMobileNavOn
    ? `${style.nav} ${style["nav--open"]}`
    : style.nav;

  const disableScroll = (): void => {
    isMobileNavOn
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  useEffect(() => {
    disableScroll();
  }, [isMobileNavOn]);

  return (
    <header className={style.header}>
      <div className={style["header__header-wrapper"]}>
        {isMobileNavOn && <div className={style["header__overlay"]}></div>}
        <CompanyLogo></CompanyLogo>
        <nav className={navClassName}>
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
        <HamburgerBtn
          isMobileNavOn={isMobileNavOn}
          setIsMobileNavOn={setIsMobileNavOn}
        ></HamburgerBtn>
        <div className={style["header__btn-wrapper"]}>
          <ButtonLink>Request Invite</ButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
