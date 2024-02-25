import React from "react";
import styles from "./RewardsBox.module.css";
import Text from "../../../common/Text/Text";

const RewardsBox = () => {
  const rewards = [
    { user: "0x50bb...5021", amount: "4.5(14.45%)", rewards: "0.757538" },
    { user: "0x50bb...5021", amount: "4.5(14.45%)", rewards: "0.757538" },
    { user: "0x50bb...5021", amount: "4.5(14.45%)", rewards: "0.757538" },
    { user: "0x50bb...5021", amount: "4.5(14.45%)", rewards: "0.757538" },
    { user: "0x50bb...5021", amount: "4.5(14.45%)", rewards: "0.757538" },
  ];
  return (
    <>
      <div className={styles.rewardBox}>
        <Text base0 xl semiBold textCenter>
          Top Rewards
        </Text>
        <div className={styles.content}>
          <div className={styles.list}>
            <Text base100 sm className={styles.itemTitle}>
              User (BNB)
            </Text>
            <Text base100 sm className={styles.itemTitle}>
              Amount (BNB)
            </Text>
            <Text base100 sm mlAuto textRight className={styles.itemTitle}>
              Rewards (BNB)
            </Text>
          </div>

          {rewards.map((el, i) => (
            <div className={styles.list} key={i}>
              <Text base50 sm>
                {el.user}
              </Text>
              <Text base50 sm>
                {el.amount}
              </Text>
              <Text base50 sm mlAuto textRight>
                {el.rewards}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RewardsBox;
