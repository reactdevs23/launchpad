import React, { useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

import classes from "./SaleBox.module.css";
import Text from "../../../common/Text/Text";
import Button from "../../../common/Button/Button";
import { checkIfNumber } from "../../../../utils";
import CountDown from "./CountDown/CountDown";

const SaleBox = () => {
  const contributerInfo = [
    { key: "Total Contributors", value: "0" },
    { key: "Avg. Contribution", value: "0 BNB" },
    { key: "Sale Rate per 1 BNB", value: "2,600,00 PPT / BNB" },
    { key: "Listing Rate per 1 BNB", value: "2,600,00 PPT / BNB" },
    { key: "My Contribution", value: "0 BNB" },
    { key: "My Reserved Tokens", value: "0 PPT" },
  ];
  const [contribution, setContribution] = useState("");
  return (
    <>
      <div className={classes.saleBox}>
        <div className={classes.saleInfo}>
          <Text semiBold md base0 textCenter>
            Sale Starts In:
          </Text>
          <CountDown time="2024-02-23T14:30:00.000Z" />
        </div>
        {/* Progress bar */}
        <div>
          <div className={classes.progressText}>
            <Text base0 sm semibold>
              0 BNB
            </Text>
            <Text base0 sm semibold>
              10 BNB
            </Text>
          </div>

          <ProgressBar progress={2.6} max={10} />
        </div>
        {/* Contribute Box */}
        <div className={classes.contributeBox}>
          <div className={classes.contributeActions}>
            <input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              onKeyDown={checkIfNumber}
              className={classes.contribution}
              placeholder="0"
            />{" "}
            <Text sm base100 textCenter>
              You can contribute up to $25,000
            </Text>
          </div>

          <div className={classes.buttonContainer}>
            <Button
              onClick={() => {}}
              size="md"
              btnPrimary
              className={classes.button}
            >
              Max
            </Button>
            <Button
              onClick={() => {}}
              size="md"
              btnBlack
              className={classes.button}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className={classes.contributorList}>
          {contributerInfo.map((el, i) => (
            <p key={i} className={classes.itemContainer}>
              <Text sm base100>
                {el.key}
              </Text>

              <Text sm base100 textRight mlAuto>
                {el.value}
              </Text>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SaleBox;
