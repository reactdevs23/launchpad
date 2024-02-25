import React from "react";
import { HiCheck } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import { dex, android, pan, poocoin, securityPlus } from "../../../../assets";
import { LuCopy } from "react-icons/lu";

import classes from "./DEXBox.module.css";
import Text from "../../../common/Text/Text";
import CopyToClipboard from "react-copy-to-clipboard";
import CountDown from "./CountDown/CountDown";

const DEXBox = () => {
  const dexListing = [
    { key: "ListedOn", icon: pan, value: "PancakeSwap" },
    { key: "Chart", icon: poocoin, value: "Pocoin" },
    { key: "Chart", icon: android, value: "AVE.Ai" },
    { key: "Chart", icon: dex, value: "Gecko Terminal" },
    { key: "Chart", icon: android, value: "DexCheck" },
  ];
  const goPlusSecurity = [
    { key: "Contact Verified", icon: <HiCheck />, value: "True" },
    { key: "Mintable", icon: <HiCheck />, value: "True" },
    { key: "Transfer Pausable", icon: <MdClose />, value: "False" },
    { key: "Blacklist", icon: <MdClose />, value: "False" },
  ];
  return (
    <div className={classes.dexBox}>
      <div className={classes.dexHeader}>
        <Text lg base0 semiBold>
          Estimated DEX Listing Time
        </Text>
        <CountDown time="2024-02-23T14:30:00.000Z" />
      </div>
      <div className={classes.cardContent}>
        <div className={classes.dexList}>
          <div
            className={[classes.dexListItem, classes.dexListItemHeader].join(
              " "
            )}
          >
            <Text sm base100>
              Token Address
            </Text>
            <Text base0 md className={classes.value}>
              {"0x13D67Fd10BDBe8301E978e4AdCBD2c0AD26F7549".slice(0, 5)}...{" "}
              {"00x13D67Fd10BDBe8301E978e4AdCBD2c0AD26F7549".slice(-5)}
              <CopyToClipboard text="0x13D67Fd10BDBe8301E978e4AdCBD2c0AD26F7549">
                <LuCopy className={classes.copyIcon} />
              </CopyToClipboard>
            </Text>
          </div>
          {dexListing.map((el, i) => (
            <div className={classes.dexListItem} key={i}>
              <Text sm base100>
                {el.key}
              </Text>
              <Text md base50 mlAuto className={classes.value}>
                <span>{el.value}</span>{" "}
                <img src={el.icon} alt="#" className={classes.icon} />
              </Text>
            </div>
          ))}
        </div>
        <div className={classes.plusSecurityContainer}>
          <img src={securityPlus} alt="#" className={classes.securityIcon} />
          <Text md color="#00DCFA">
            GoPlus Security
          </Text>
        </div>
        <div className={classes.dexList}>
          {goPlusSecurity.map((el, i) => (
            <div
              className={[classes.dexListItem, classes.securityItem].join(" ")}
              key={i}
            >
              <Text sm base100>
                {el.key}
              </Text>
              <Text
                md
                base50
                success={el.value.toLocaleLowerCase() === "true" && "success"}
                error={el.value.toLocaleLowerCase() === "false" && "error"}
                className={classes.value}
                mlAuto
              >
                <span>{el.value}</span>{" "}
                <span className={classes.icon}>{el.icon}</span>
              </Text>
            </div>
          ))}
        </div>
        <a
          href="#/"
          target="_blank"
          rel="noreferrer"
          className={classes.moreInfo}
        >
          See More Info
        </a>
      </div>
    </div>
  );
};

export default DEXBox;
