import React from "react";
import classes from "./Listcontainer.module.css";
import Text from "../Text/Text";

const Listcontainer = ({ data }) => {
  return (
    <div className={classes.listContainer}>
      {data.map(({ icon, title, info }, i) => (
        <div className={classes.list} key={i}>
          {" "}
          <div className={classes.iconContainer}>
            <img src={icon} alt="#" className={classes.icon} />
          </div>
          <div className={classes.titleAndInfo}>
            <Text xl base0 semiBold>
              {title}
            </Text>
            <Text md base100>
              {info}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listcontainer;
