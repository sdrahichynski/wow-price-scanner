import React from "react";
import copperSrc from "./extra/money-copper.gif";
import silverSrc from "./extra/money-silver.gif";
import goldSrc from "./extra/money-gold.gif";
import styles from "./wow-price.module.scss";

const WowPrice = ({ priceInCopper }) => {
  const strPrice = String(priceInCopper);
  const gold = strPrice.slice(0, -4);
  const silver = strPrice.slice(-4, -2);
  const copper = strPrice.slice(-2);

  return (
    <span>
      {gold !== "" && (
        <span className={styles.price}>
          {gold}
          <img src={goldSrc} alt="" />
        </span>
      )}

      {silver !== "" && (
        <span className={styles.price}>
          {silver}
          <img src={silverSrc} alt="" />
        </span>
      )}

      {copper !== "" && (
        <span className={styles.price}>

          {copper}
          <img src={copperSrc} alt="" />
        </span>
      )}
    </span>
  );
};

export default WowPrice;
