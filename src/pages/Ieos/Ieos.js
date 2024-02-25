import React from "react";
import classes from "./Ieos.module.css";
import clsx from "clsx";
import LeftSide from "../../components/Ieos/LeftSide/LeftSide";
import RightSide from "../../components/Ieos/RightSide/RightSide";

const Ieos = () => {
  return (
    <section className={clsx("container", "paddingTop", classes.wrapper)}>
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Ieos;
