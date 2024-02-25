import React from "react";

import {
  adobe,
  atlasian,
  braze,
  ghost,
  hellosign,
  hubspot,
  intercom,
  maze,
  openDoor,
  treeHouse,
} from "../../../assets";
import classes from "./TrustedBy.module.css";
import Text from "../../common/Text/Text";
import Highlight from "../../common/Highlight/Highlight";

const TrustedBy = () => {
  const partners = [
    adobe,
    braze,
    hellosign,
    maze,
    ghost,
    atlasian,
    treeHouse,
    intercom,
    openDoor,
    hubspot,
  ];
  return (
    <div className={classes.wrapper}>
      <Text xl2 base0 textCenter className={classes.text}>
        More than <Highlight>25+ </Highlight> companies HR around the world
        trusted with token managements.
      </Text>
      <div className={classes.partners}>
        {partners.map((partner, i) => (
          <img src={partner} alt="#" key={i} className={classes.partner} />
        ))}
      </div>{" "}
    </div>
  );
};

export default TrustedBy;
