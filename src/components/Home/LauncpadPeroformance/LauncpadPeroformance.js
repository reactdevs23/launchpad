import React from "react";
import classes from "./LauncpadPeroformance.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  performance,
} from "../../../assets";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";

const LauncpadPeroformance = () => {
  const data = [
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon2, label: "Ispolink", growth: "30x" },
    { icon: icon3, label: "Ispolink", growth: "35x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon3, label: "Ispolink", growth: "35x" },
    { icon: icon4, label: "Ispolink", growth: "30x" },
    { icon: icon2, label: "Ispolink", growth: "30x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon5, label: "Ispolink", growth: "35x" },
    { icon: icon2, label: "Ispolink", growth: "30x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon3, label: "Ispolink", growth: "35x" },
    { icon: icon4, label: "Ispolink", growth: "30x" },
    { icon: icon2, label: "Ispolink", growth: "30x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
    { icon: icon3, label: "Ispolink", growth: "35x" },
    { icon: icon4, label: "Ispolink", growth: "30x" },
    { icon: icon2, label: "Ispolink", growth: "30x" },
    { icon: icon1, label: "Ispolink", growth: "35x" },
  ];
  return (
    <Wrapper className={classes.myWrapper}>
      <div className={classes.imgContainer}>
        <img src={performance} alt="#" className={classes.img} />
      </div>
      <div className={classes.right}>
        <div className={classes.headingContainer}>
          <SectionHeading mobileCenter>
            DA Launchpad <Highlight>Performances</Highlight>
          </SectionHeading>
          <Text base100 lg mobileCenter>
            Past IDOs/SHO offerings that were hosted on DAO Maker crypto
            launchpad.
          </Text>
        </div>

        <div className={classes.items}>
          {data.map((el, i) => (
            <React.Fragment key={i}>
              <div className={classes.item}>
                <img src={el.icon} alt="#" className={classes.icon} />
                <Text md base50 semiBold className={classes.text}>
                  Ispolink
                </Text>
                <Text success base50 semiBold className={classes.text}>
                  {el.growth}
                </Text>
              </div>
            </React.Fragment>
          ))}{" "}
          <div className={classes.item}>
            <Text md base50 semiBold textCenter wFull className={classes.text}>
              600 +
            </Text>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LauncpadPeroformance;
