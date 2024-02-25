import React from "react";
import clsx from "clsx";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import TrustedBy from "../../components/Home/TrustedBy/TrustedBy";
import ExploreLaunchPad from "../../components/Home/ExploreLaunchPad/ExploreLaunchPad";
import WeOffers from "../../components/Home/WeOffers/WeOffers";
import DaoLaunchPad from "../../components/Home/DaoLaunchPad/DaoLaunchPad";
import StakeDAO from "../../components/Home/StakeDAO/StakeDAO";
import FarmsAndVesting from "../../components/Home/FarmsAndVesting/FarmsAndVesting";
import CommunityVoting from "../../components/Home/CommunityVoting/CommunityVoting";
import EcosystemGovernence from "../../components/Home/EcosystemGovernence/EcosystemGovernence";
import WhatCustomerSaying from "../../components/Home/WhatCustomerSaying/WhatCustomerSaying";
import LauncpadPeroformance from "../../components/Home/LauncpadPeroformance/LauncpadPeroformance";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={clsx("container ", "paddingTop", classes.wrapper)}>
      <HeroSection />
      <div className={classes.line}></div>
      <ExploreLaunchPad />
      <div className={classes.line}></div>
      <TrustedBy />
      <div className={classes.line}></div>
      <WeOffers />
      <div className={classes.line}></div>
      <DaoLaunchPad />
      <div className={classes.line}></div>
      <StakeDAO />
      <div className={classes.line}></div>
      <FarmsAndVesting />
      <div className={classes.line}></div>
      <CommunityVoting />
      <div className={classes.line}></div>
      <EcosystemGovernence />
      <div className={classes.line}></div>
      <WhatCustomerSaying />
      <div className={classes.line}></div>
      <LauncpadPeroformance />
    </div>
  );
};

export default Home;
