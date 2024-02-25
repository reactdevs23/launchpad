import React from "react";
import Switch from "../../../common/Switch/Switch";
import classes from "./Switching.module.css";
import Text from "../../../common/Text/Text";
import clsx from "clsx";

const Switching = ({ first, last, label, isChecked, setIsChecked }) => {
  const inputChangeHandler = (e) => {
    const { checked } = e.target;

    setIsChecked(checked);
  };

  return (
    <div
      className={clsx(
        classes.spaceBetween,
        last && classes.last,
        first && classes.first
      )}
    >
      <Text md base50>
        {label}
      </Text>
      <Switch checked={isChecked} onChange={inputChangeHandler} mlAuto />
    </div>
  );
};

export default Switching;
