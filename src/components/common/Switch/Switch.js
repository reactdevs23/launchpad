import clsx from "clsx";
import classes from "./Switch.module.css";

const Switch = ({ mlAuto, ...rest }) => {
  return (
    <label className={clsx(classes.switch, mlAuto && classes.mlAuto)}>
      <input {...rest} type="checkbox" />
      <span className={classes.slider}></span>
    </label>
  );
};

export default Switch;
