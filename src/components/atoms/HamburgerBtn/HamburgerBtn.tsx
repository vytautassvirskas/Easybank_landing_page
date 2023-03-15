import React from "react";
import style from "./HamburgerBtn.module.scss";

type HamburgerBtnProps = {
  isMobileNavOn: boolean;
  setIsMobileNavOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerBtn = (props: HamburgerBtnProps): JSX.Element => {
  const { isMobileNavOn, setIsMobileNavOn } = props;
  const hamburgerClassName = isMobileNavOn
    ? `${style.hamburger} ${style["hamburger--open"]}`
    : style.hamburger;
  return (
    <div
      className={hamburgerClassName}
      onClick={() => setIsMobileNavOn(!isMobileNavOn)}
    >
      <div className={style["header__hamburger-dash"]}></div>
    </div>
  );
};

export default HamburgerBtn;
