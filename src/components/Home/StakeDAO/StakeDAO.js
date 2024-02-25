import React from "react";
import classes from "./StakeDAO.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import {
  decentralize,
  rewards,
  stakeDaoImg,
  strategies,
} from "../../../assets";

import Listcontainer from "../../common/Listcontainer/Listcontainer";
import Button from "../../common/Button/Button";
const StakeDAO = () => {
  const data = [
    {
      icon: decentralize,
      title: "Decentralized Governance",
      info: "Stake DAO provides users with the opportunity to actively participate in the governance of the platform.",
    },
    {
      icon: strategies,
      title: "Automated Strategies",
      info: "Stake DAO provides automated yield farming, optimizing returns by deploying assets to diverse liquidity pools.",
    },
    {
      icon: rewards,
      title: "Staking Pools and Rewards",
      info: "Stake DAO offers staking pools for users to secure the network and earn rewards.",
    },
  ];
  return (
    <Wrapper className={classes.myWrapper}>
      <div className={classes.imgContainer}>
        {" "}
        <img src={stakeDaoImg} alt="#" className={classes.img} />
      </div>
      <div className={classes.right}>
        <div className={classes.headingContainer}>
          <SectionHeading left mobileCenter>
            Stake <Highlight>DAO</Highlight>
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
            Stake Now
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default StakeDAO;
