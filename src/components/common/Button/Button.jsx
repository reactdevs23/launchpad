import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({
  iconBtn,
  btnBlack,
  btnMoreBlack,
  btnPrimary,
  btnGray,
  btnWarning,
  btnGreen,
  btnTransparent,
  size,
  to,
  onClick,
  className,
  children,
  mlAuto,
  wFull,

  ...rest
}) => {
  const classname = clsx(
    className,
    classes.btn,

    iconBtn && classes.iconBtn,
    size && classes[size],
    btnBlack && classes.btnBlack,
    btnMoreBlack && classes.btnMoreBlack,
    btnPrimary && classes.btnPrimary,
    btnTransparent && classes.btnTransparent,
    btnGray && classes.btnGray,
    btnWarning && classes.btnWarning,
    btnGreen && classes.btnGreen,
    wFull && classes.wFull,
    mlAuto && classes.mlAuto,
    ""
  );

  if (to)
    return (
      <Link className={classname} to={to} {...rest}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={classname} onClick={onClick} {...rest}>
        {children}
      </button>
    );

  return (
    <button className={classname} {...rest}>
      {children}
    </button>
  );
};

export default Button;
