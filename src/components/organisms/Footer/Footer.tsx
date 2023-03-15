import React from "react";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import CompanyLogo from "../../atoms/CompanyLogo/CompanyLogo";
import SocialNetworksList from "../../molecules/SocialNetworksList/SocialNetworksList";
import style from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  const navNames: string[] = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];

  return (
    <footer className={style.footer}>
      <div className={style["footer__footer-wrapper"]}>
        <div className={style["footer__social-wrapper"]}>
          <CompanyLogo color={"rgb(255, 255, 255)"}></CompanyLogo>
          <SocialNetworksList></SocialNetworksList>
        </div>
        <nav className={style.nav}>
          <ul className={style["nav__list"]}>
            {navNames.map(
              (item: string): React.ReactNode => (
                <li className={style["nav__item"]} key={item}>
                  <a href="/" className={style["nav__link"]}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className={style["footer__copyright-wrapper"]}>
          <ButtonLink>Request Invite</ButtonLink>
          <small className={style["footer__copyright"]}>
            &copy; Easynbank. All right Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
