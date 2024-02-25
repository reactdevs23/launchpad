import React from "react";
import classes from "./WeOffers.module.css";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import {
  govenance,
  launchpad,
  muchMore,
  stakeDao,
  versting,
  voting,
} from "../../../assets";
const data = [
  {
    img: launchpad,
    title: "Logo Launchpad",
    info: "Access DAO Maker incubations and other top-tier tokens and NFT projects before they reach secondary markets.",
  },
  {
    img: versting,
    title: "Farms & Versting",
    info: "Access staking, vesting, liquidity lock, and other token solutions.",
  },
  {
    img: voting,
    title: "Community Voting",
    info: "DAO stakers and verified wallets can vote for startups to win token bribes.",
  },
  {
    img: govenance,
    title: "Governance",
    info: "Join the DAO and participate in ecosystem governance & have so much fun with Launchpad.",
  },
  {
    img: stakeDao,
    title: "Stake DAO",
    info: "Access yield, discounts, and exclusive private allocations.",
  },
  {
    img: muchMore,
    title: "& so much more...",
    info: "The DAO Maker product ecosystem is constantly expanding.",
  },
];
const WeOffers = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.headingContainer}>
        <SectionHeading className={classes.heading} textCenter>
          We offers more than a simple <Highlight>Launchpad</Highlight> which is
          more advanced than all others!
        </SectionHeading>
        <Text lg base100 textCenter>
          Our platform offers the modern enterprise full control of how date can
          be access and used with industry leading software solutions for
          identity, activation, and date collaboration
        </Text>
      </div>
      <div className={classes.container}>
        {data.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.imgAndId}>
              <img src={el.img} alt="#" className={classes.img} />
              <h3 className={classes.id}>{i + 1}</h3>
            </div>
            <div className={classes.titleAndInfo}>
              <Text base0 xl semiBold>
                {el.title}
              </Text>
              <Text sm base100>
                {el.info}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeOffers;
