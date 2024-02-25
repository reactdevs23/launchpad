import React from "react";
import classes from "./WarningContainer.module.css";

import { warningIcon } from "../../../../assets";
import Text from "../../../common/Text/Text";
import VideoWrapper from "../../../Ieos/VideoWrapper/VideoWrapper";

const ApproveTokenWarningContainer = () => {
  return (
    <div className={classes.warningWrapper}>
      <div className={classes.warningContainer}>
        <img src={warningIcon} alt="" />
        <Text sm warning>
          If you use fees make sure your toekn can exclude addresses for fees,
          max transation etc. If you have max wallet make sure it’s disables or
          set to max.
        </Text>
      </div>
      <VideoWrapper url="https://www.youtube.com/watch?v=668nUCeBHyY" />
    </div>
  );
};

export default ApproveTokenWarningContainer;
