import React from "react";
import classes from "./FarmsAndVesting.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import { farmAndVesting, liquidity, schedules, vesting } from "../../../assets";

import Listcontainer from "../../common/Listcontainer/Listcontainer";
import Button from "../../common/Button/Button";
const FarmsAndVesting = () => {
  const data = [
    {
      icon: liquidity,
      title: "Liquidity Farming Opportunities",
      info: "Explore a variety of liquidity farming options where users can stake their tokens to earn rewards.",
    },
    {
      icon: vesting,
      title: "Vesting Mechanisms for Token",
      info: "Implement vesting to ensure fair token distribution and incentivize long-term commitment.",
    },
    {
      icon: schedules,
      title: "Customizable Vesting Schedules",
      info: "Customize vesting schedules for transparent token release aligned with project goals and stakeholder incentives.",
    },
  ];
  return (
    <Wrapper>
      <div className={classes.left}>
        <div className={classes.headingContainer}>
          <SectionHeading left mobileCenter>
            Farms and <Highlight>Vesting</Highlight>
          </SectionHeading>
          <Text lg base100 mobileCenter>
            Access DAO Maker incubation projects, top tier sales and NFT
            projects before they hit the market.
          </Text>
        </div>
        <div className={classes.listContainer}>
          <Listcontainer data={data} />
        </div>
        <div className={classes.buttonContainer}>
          <Button size="md" btnPrimary>
            Farm Now
          </Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        {" "}
        <img src={farmAndVesting} alt="#" className={classes.img} />
      </div>
    </Wrapper>
  );
};

export default FarmsAndVesting;
