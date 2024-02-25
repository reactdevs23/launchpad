import React from "react";
import { VscShield } from "react-icons/vsc";
import { BsTelegram, BsDiscord, BsGithub, BsTwitterX } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import classes from "./LeftSide.module.css";
import DEXBox from "./DexBox/DEXBox";

import Presale from "./Presale/Presale";

import { bannerImage, oracle, upcoming } from "../../../assets";
import Text from "../../common/Text/Text";
import VideoWrapper from "../VideoWrapper/VideoWrapper";

const LeftSide = ({ feature = ["kyc", "audit"] }) => {
  const operatingFields = [
    "NFT AI ",
    "Web3.0 ",
    "Exchange",
    "App",
    "Media",
    "Gaming",
    "Metaverse",
    "Artificial Intelligence ",
    "BLB listed on coinmarketcap ",
  ];
  const socialItems = [
    { icon: <BsDiscord />, to: "#" },
    { icon: <FaFacebook />, to: "#" },
    { icon: <BsTwitterX />, to: "#" },
    { icon: <BsTelegram />, to: "#" },
    { icon: <RiInstagramFill />, to: "#" },

    { icon: <BsGithub />, to: "#" },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.bannerWrapper}>
        <div className={classes.bannerContainer}>
          <img src={bannerImage} alt="#" className={classes.banner} />

          <div className={classes.topHeader}>
            {" "}
            <p className={[classes.status, classes.upcoming].join(" ")}>
              <img src={upcoming} alt="#" className={classes.statusImg} />
              <Text base100 xs bold upperCase secondaryContent>
                Upcoming
              </Text>
            </p>
            <div className={classes.socialContainer}>
              {socialItems.map((el, i) => (
                <a
                  href={el.to}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className={classes.socialIcon}
                >
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={classes.header}>
            <div className={classes.logoContainer}>
              <img src={oracle} alt="#" className={classes.logo} />
              <Text xl semiBold base0 className={classes.logoText}>
                {" "}
                Boundless World 💸
              </Text>
            </div>
            <div className={classes.features}>
              {feature.map((el, i) => (
                <div className={classes.feature} key={i}>
                  <VscShield className={classes.lock} />
                  <Text base100 xs semiBold upperCase>
                    {el}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.info}>
        <Text base50 sm>
          🚀 BoundlessWorld is a gateway to the future 🚀
        </Text>

        <Text base50 sm>
          🚀 In addition to having intrinsic value, our smart NFTs also have the
          ability to be launched on our exclusive LAND and GAMES, and this
          action makes it go out of the one-dimensional capability and enter
          comprehensive arenas in the world in the future. 🚀
        </Text>

        <Text base50 sm>
          😎We develop protocols and agreements that ensure the safety of our
          investors, but most importantly profitability We rely on audit & kyc
          for the security of our investors.🔐
        </Text>

        <div className={classes.listContainer}>
          <Text base50 sm>
            BoundlessWorld is an open source project operating in the fields of:
          </Text>
          {operatingFields.map((el, i) => (
            <Text base50 sm className={classes.text} key={i}>
              ✔️<span>{el}</span>
            </Text>
          ))}
        </div>

        <div>
          <Text sm base50>
            🔥 Total Supply: 125.000.000 PPT
          </Text>
          <Text sm base50>
            🔥 Locked Reward Supply: 85.000.000 PPT
          </Text>
          <Text sm base50>
            {" "}
            🔥 Presale: 26.000.000
          </Text>
          <Text sm base50>
            {" "}
            🔥 Liquidity: 13.260.000
          </Text>
        </div>
        <Text sm base50>
          ❌ Tax: 0% (Buy/Sell)
        </Text>
      </div>
      <VideoWrapper url="https://www.youtube.com/watch?v=668nUCeBHyY" />

      <Presale />

      <DEXBox />
    </div>
  );
};

export default LeftSide;
