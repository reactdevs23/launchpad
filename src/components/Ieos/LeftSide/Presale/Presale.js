import React from "react";
import styles from "./Presale.module.css";
import { useParams } from "react-router-dom";
import Text from "../../../common/Text/Text";
const Presale = () => {
  const { id } = useParams();
  const info = [
    { key: "Sale Type", value: "Fair Launch" },
    { key: "Token Name", value: "Wallasa Wallet" },
    { key: "Token Symbol", value: "PPT" },
    { key: "Total Supply", value: "425,000,000" },
    { key: "Token for Presale", value: "26,000,000" },
    { key: "Token for Liquidity", value: "13,260,000" },
    { key: "Soft Cap", value: "5,000 USDT" },
    { key: "Presale Start Time (UTC)", value: "2023-05-30 06:00" },
    { key: "Presale End Time (UTC)", value: "2023-06-02 18:00" },
    { key: "Liquidity Percent", value: "51 %" },
    { key: "Liquidity Unlock Time (UTC)", value: "2024-06-02 06:00" },
  ];
  return (
    <div className={styles.presaleContainer}>
      <div className={[styles.listItemContainer, styles.header].join(" ")}>
        <Text sm base100>
          Presale Address
        </Text>

        <div style={{ marginLeft: "auto" }}>
          <Text md base0>
            {"0xfb3c39f559c68b24c21b672eb2c699d020f635bd".slice(0, 5)}...{" "}
            {"0xfb3c39f559c68b24c21b672eb2c699d020f635bd".slice(-5)}
          </Text>
          <Text sm base100 opacity=".6" mlAuto textRight>
            Do not send BNB directly to the presale address!
          </Text>
        </div>
      </div>
      <div className={styles.listItems}>
        {info.map((el, i) => (
          <div className={styles.listItemContainer} key={i}>
            <Text sm base100>
              {el.key}
            </Text>
            <Text md base50 textRight mlAuto>
              {el.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presale;
