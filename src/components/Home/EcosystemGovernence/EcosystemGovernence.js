import React from "react";
import classes from "./EcosystemGovernence.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import { ecosystem, evolution, submission, token } from "../../../assets";

import Listcontainer from "../../common/Listcontainer/Listcontainer";
import Button from "../../common/Button/Button";
const EcosystemGovernence = () => {
  const data = [
    {
      icon: token,
      title: "Governance Token",
      info: "Ecosystem Governance provides a native governance token that grants holders voting rights.",
    },
    {
      icon: submission,
      title: "Proposal Submission and Voting",
      info: "Participants can submit proposals for ecosystem improvements, protocol upgrades.",
    },
    {
      icon: evolution,
      title: "Governance Framework Evolution",
      info: "Ecosystem Governance facilitates the evolution of its governance framework over time.",
    },
  ];
  return (
    <Wrapper>
      <div className={classes.left}>
        <div className={classes.headingContainer}>
          <SectionHeading left mobileCenter>
            Ecosystem <Highlight>Governance</Highlight>
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
            Participate on Snapchat
          </Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        {" "}
        <img src={ecosystem} alt="#" className={classes.img} />
      </div>
    </Wrapper>
  );
};

export default EcosystemGovernence;
