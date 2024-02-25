import React from "react";
import styles from "./Marketer.module.css";
import Text from "../../../common/Text/Text";

const Marketer = () => {
  const data = [
    { key: "Your Rewards", value: "0 BNB" },
    { key: "Pool Referrer Count", value: "22" },
    { key: "Realtime Reward Percentage", value: "17%" },
    { key: "Total Ref Amount", value: "5.24216103734 BNB" },
    { key: "My Contribution", value: "0 BNB" },
    { key: "My Reserved Tokens", value: "0 PPT" },
  ];
  return (
    <div className={styles.marketer}>
      <Text base0 xl semiBold textCenter>
        Affiliate Program
      </Text>
      <div className={styles.content}>
        <div className={styles.list}>
          {data.map((el, i) => (
            <div className={styles.itemContainer} key={i}>
              <Text base100 sm>
                {el.key}
              </Text>

              <Text base100 sm mlAuto textRight>
                {el.value}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketer;
