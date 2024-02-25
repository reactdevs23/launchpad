import React from "react";
import styles from "./RightSide.module.css";
import SaleBox from "./SaleBox/SaleBox";
import Marketer from "./Marketer/Marketer";
import Token from "./Token/Token";
import RewardsBox from "./RewardBox/RewardsBox";

import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";

const RightSide = () => {
  return (
    <div className={styles.content}>
      <div className={styles.networkConnect}>
        <Text sm base50>
          Connect Network To
        </Text>
        <Button onClick={() => {}} size="sm" btnPrimary>
          BNB Smart Chain
        </Button>
      </div>
      <div className={styles.cardContainer}>
        <SaleBox />
        <Marketer />
        <Token />
        <RewardsBox />
      </div>
    </div>
  );
};

export default RightSide;
