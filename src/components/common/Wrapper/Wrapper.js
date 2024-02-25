import React from "react";
import classes from "./Wrapper.module.css";
import clsx from "clsx";

const Wrapper = ({ children, className }) => {
  return (
    <section className={clsx(classes.wrapper, className)}>{children}</section>
  );
};

export default Wrapper;
