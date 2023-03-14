import React, { Children } from "react";
import style from "./ButtonLink.module.scss";

type ButtonLinkProps = {
  children: string;
};

const ButtonLink = ({ children }: ButtonLinkProps) => {
  console.log("children: ", typeof children);

  return <a className={style.btn}>{children}</a>;
};

export default ButtonLink;
