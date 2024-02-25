import React from "react";
import classes from "./DaoLaunchPad.module.css";
import Wrapper from "../../common/Wrapper/Wrapper";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import { funding, launchPad, process, tokenized } from "../../../assets";

import Listcontainer from "../../common/Listcontainer/Listcontainer";
import Button from "../../common/Button/Button";
const DaoLaunchPad = () => {
  const data = [
    {
      icon: tokenized,
      title: "Tokenized Governance",
      info: "Our DAO Launchpad enables token holders to shape project direction through decentralized governance.",
    },
    {
      icon: funding,
      title: "Funding Opportunities",
      info: "Entrepreneurs and innovators can leverage our DAO Launchpad to access funding opportunities.",
    },
    {
      icon: process,
      title: "Transparent Selection Process",
      info: "We employ a transparent and community-driven project screening and selection process.",
    },
  ];
  return (
    <Wrapper>
      <div className={classes.left}>
        <div className={classes.headingContainer}>
          <SectionHeading left mobileCenter>
            DAO <Highlight>Launchpad</Highlight>
          </SectionHeading>
          <Text lg base100 mobileCenter>
            DAO Launchpad is a platform that facilitates decentralized project
            launches and community governance, empowering participants to
            contribute to decision-making and shape the future of blockchain
            projects.
          </Text>
        </div>
        <div className={classes.listContainer}>
          <Listcontainer data={data} />
        </div>
        <div className={classes.buttonContainer}>
          <Button size="md" btnPrimary className={classes.button}>
            Join IDOs Now
          </Button>
          <Button size="md" btnBlack className={classes.button}>
            How to Participate
          </Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img src={launchPad} alt="#" className={classes.img} />
      </div>
    </Wrapper>
  );
};

export default DaoLaunchPad;
