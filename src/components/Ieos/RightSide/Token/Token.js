import React from "react";
import classes from "./Token.module.css";
import Chart from "./Chart/Chart.js";
import Text from "../../../common/Text/Text.js";

const Token = () => {
  const legend = [
    { name: "Presale", color: "#4B73FF" },
    { name: "Team Vesting", color: "#F8D33A" },
    { name: "Liquidity", color: "#11D080" },
    { name: "Unlocked", color: "#FF9E2D" },
    { name: "Locked", color: "#FA4B55" },
    { name: "Burnt", color: "#2A2B2F" },
  ];
  return (
    <>
      <div className={classes.tokenContainer}>
        <Text base0 xl semiBold textCenter>
          Tokenomics - Supply Distribution
        </Text>
        <div className={classes.line}></div>
        <div className={classes.marketCap}>
          <div>
            <Text base50 sm className={classes.tokenText}>
              Diluted Market Cap:
            </Text>
            <Text base0 md>
              15,027 $
            </Text>
          </div>{" "}
          <div>
            <Text base50 sm className={classes.tokenText}>
              Circulating Market Cap:
            </Text>
            <Text base0 md>
              4,808 $
            </Text>
          </div>
        </div>{" "}
        <div className={classes.line}></div>
        <div className={classes.chartAndLegend}>
          <div className={classes.tokenChart}>
            <Chart />
          </div>
          <div className={classes.tokenDistribution}>
            {legend.map((el, i) => (
              <div className={classes.distributionItem} key={i}>
                <div
                  className={classes.distributionDot}
                  style={{ backgroundColor: el.color }}
                ></div>
                <Text sm base100>
                  {el.name}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.tokenLockAddresses}>
          <div className={classes.line}></div>
          <div className={classes.lockInfo}>
            <div className={classes.lockDetails}>
              <Text sm base50>
                Lock Addresses:
              </Text>
              <Text sm base0 semiBold>
                0x1aE...482E3
              </Text>
            </div>
            <div className={classes.lockDetails}>
              <Text sm base50 className={classes.lockAmount}>
                Max Amount:
              </Text>
              <Text sm base0 semiBold className={classes.lockAddress}>
                40,000,000
              </Text>
            </div>
          </div>{" "}
          <div className={classes.line}></div>
          <Text
            xs
            semiBold
            primaryDefault
            textCenter
            color="#4B73FF"
            className={classes.date}
          >
            2023-09-01 00:01
          </Text>
        </div>
      </div>
    </>
  );
};

export default Token;
