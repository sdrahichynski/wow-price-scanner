import * as React from "react";
import * as LC from "./components";
import styles from "./price-scanner.module.scss";

const PriceScanner = () => {

  return (
    <div className={styles.wrapper}>
      <LC.Form />
    </div>
  );
};

export default PriceScanner;
