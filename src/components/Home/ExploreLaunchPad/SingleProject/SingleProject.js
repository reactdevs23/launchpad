import React from "react";
import { VscShield } from "react-icons/vsc";

import { IoNotificationsOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

import ProgressBar from "./ProgressBar/ProgressBar";
import classes from "./SingleProject.module.css";

import { eth, upcoming } from "../../../../assets";
import Text from "../../../common/Text/Text";

const Card = ({
  status,
  feature,
  image,
  icon,
  title,
  info,
  softcap,
  hardcap,
  locked,
  liquidity,
  progress,
  startPrice,
  endPrice,
  listingTime,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.bannerContainer}>
        <img src={image} alt="#" className={classes.banner} />
        {status.toLowerCase() === "popular" && (
          <div className={[classes.status, classes.upcoming].join(" ")}>
            <img src={upcoming} alt="#" className={classes.statusImg} />

            <Text base100 xs bold upperCase secondaryContent>
              Upcoming
            </Text>
          </div>
        )}
        {status.toLowerCase() === "upcoming" && (
          <div className={[classes.status, classes.upcoming].join(" ")}>
            <img src={upcoming} alt="#" className={classes.statusImg} />
            <Text base100 xs bold upperCase secondaryContent>
              Upcoming
            </Text>
          </div>
        )}{" "}
        <div className={classes.header}>
          <img src={icon} alt="#" className={classes.icon} />{" "}
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
      </div>{" "}
      <div className={classes.headingAndInfoContainer}>
        <div className={classes.heading}>
          <div>
            <Text xl2 semiBold base0>
              {title}
            </Text>

            <Text sm semiBold base50>
              {info}
            </Text>
          </div>
          <img src={eth} alt="#" className={classes.eth} />
        </div>
        <div className={classes.progressContainer}>
          <div className={classes.spaceBetween}>
            <Text sm semiBold base0>
              Progress
            </Text>
            <Text sm semiBold base0>
              {progress}%
            </Text>
          </div>

          <ProgressBar progress={progress} />
          <div className={[classes.price].join(" ")}>
            <Text xs base0 opacity=".5" upperCase>
              {startPrice} Eth
            </Text>{" "}
            <Text xs base0 opacity=".5" upperCase>
              {endPrice} Eth
            </Text>
          </div>
        </div>
      </div>{" "}
      <div className={classes.itemContainer}>
        <div className={[classes.item].join(" ")}>
          <Text sm base0 opacity=".5">
            Softcap :
          </Text>
          <Text sm base0 className={`${classes.value} ${classes.text}`}>
            {softcap}
          </Text>
        </div>
        <div className={[classes.item].join(" ")}>
          <Text sm base0 opacity=".5">
            Hardcap :
          </Text>{" "}
          <Text sm base0>
            {hardcap}
          </Text>{" "}
        </div>
        <div className={[classes.item].join(" ")}>
          <Text sm base0 opacity=".5" className={classes.text}>
            Liquidity :
          </Text>

          <Text sm base0>
            {liquidity}
          </Text>
        </div>
        <div className={[classes.item].join(" ")}>
          <Text sm base0 opacity=".5">
            Locked :
          </Text>{" "}
          <Text sm base0>
            {locked}
          </Text>{" "}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.timeContainer}>
          <Text sm semiBold base100>
            Listing Time
          </Text>
          <Text md semiBold base50 mlAuto>
            {listingTime}
          </Text>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconContainer}>
            {" "}
            <IoNotificationsOutline className={classes.notification} />
          </div>
          <div className={classes.iconContainer}>
            {" "}
            <LuHeart className={classes.heart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
