import clsx from "clsx";
import classes from "./Input.module.css";
import { useEffect, useState } from "react";
import { checkIfNumber } from "../../../utils";
import Text from "../Text/Text";

const Input = ({
  label,
  warningText,
  info,
  type,
  hasError,
  value,
  onChange,
  helperError,
  rootClassName,
  className,
  wFull,
  styled,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <>
      <div
        className={clsx(
          rootClassName,
          classes.inputContainer,
          styled && classes.styled
        )}
      >
        {label && (
          <div className={classes.labelContainer}>
            <Text sm base100>
              {label}
            </Text>{" "}
            <Text xs error textLeft>
              {warningText}
            </Text>{" "}
            <Text xs base100 textLeft opacity={0.5}>
              {info}
            </Text>
          </div>
        )}
        <input
          type={inputType}
          onKeyDown={inputType === "number" ? checkIfNumber : null}
          onChange={onChange}
          value={value}
          className={clsx(
            classes.input,
            className,
            hasError && classes.hasError
          )}
          {...rest}
        />
      </div>
      {helperError && <div className={classes.helperError}>{helperError}</div>}
    </>
  );
};

export default Input;
