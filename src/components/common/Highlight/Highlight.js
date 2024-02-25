import React from "react";
import classes from "./Highligh.module.css";
import clsx from "clsx";

const Highlight = ({ children, className }) => {
  return <span className={clsx(classes.highlight, className)}>{children}</span>;
};

export default Highlight;
