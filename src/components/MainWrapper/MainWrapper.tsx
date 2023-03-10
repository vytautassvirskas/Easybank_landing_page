import React, { CSSProperties } from "react";
import styles from "./MainWrapper.module.scss";

type MainWrapperProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};
const MainWrapper = (props: MainWrapperProps): JSX.Element => {
  const { children, style } = props;

  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
};

export default MainWrapper;
