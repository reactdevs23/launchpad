import React from "react";
import classes from "./WarningContainer.module.css";
import { warningIcon } from "../../../../assets";
import Text from "../../../common/Text/Text";

const PresaleInfoWarningContainer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.warningContainer}>
        <img src={warningIcon} alt="" />
        <Text sm warning>
          225,955.33 needed to create a pool!
        </Text>
      </div>{" "}
      <Text primaryDefault xl textCenter>
        Estimated Market Cap: 0$
      </Text>
    </div>
  );
};

export default PresaleInfoWarningContainer;
