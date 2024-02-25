import React from "react";
import classes from "./CommunityVoting.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import { decentralize, discussion, stakeDaoImg } from "../../../assets";

import Listcontainer from "../../common/Listcontainer/Listcontainer";
import Button from "../../common/Button/Button";
const CommunityVoting = () => {
  const data = [
    {
      icon: decentralize,
      title: "Decentralized Decision-Making",
      info: "Community Voting empowers token holders to participate in decentralized decision-making processes.",
    },
    {
      icon: discussion,
      title: "Proposal Submission and Discussion",
      info: "Users can submit proposals and engage in discussions within the community forum.",
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
            Community <Highlight>Voting</Highlight>
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
            Earn Bribes Now
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommunityVoting;
