import React from "react";

import clsx from "clsx";

import { FaCheck } from "react-icons/fa";

import Text from "../../common/Text/Text";
import classes from "./Steps.module.css";

const Steps = ({ step }) => {
  return (
    <div>
      <div className={clsx(classes.stepItem)}>
        <div className={classes.labelContainer}>
          {step >= 2 ? (
            <div
              className={clsx(classes.number, step >= 2 && classes.completed)}
            >
              <FaCheck className={classes.checkMark} />
            </div>
          ) : (
            <div
              className={clsx(
                classes.number,
                classes.currentNumber,
                classes.line
              )}
            >
              1
            </div>
          )}
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.titelAndLabel}>
            <Text lg base0 semiBold>
              Approve Token
            </Text>
            <Text xs base100>
              Enter the token address and approve
            </Text>
          </div>
        </div>
      </div>
      <div className={clsx(classes.stepItem)}>
        <div className={classes.labelContainer}>
          {step >= 3 ? (
            <div className={clsx(classes.number, classes.completed)}>
              <FaCheck className={classes.checkMark} />
            </div>
          ) : (
            <div
              className={clsx(
                classes.number,
                step >= 2 && classes.currentNumber,
                classes.line
              )}
            >
              2
            </div>
          )}
        </div>

        <div className={classes.inputsContainer}>
          <div className={classes.titelAndLabel}>
            <Text
              lg
              base100
              semiBold
              className={step >= 2 && classes.heading}
              opacity={step >= 2 ? "1" : ".5"}
            >
              Presale Information
            </Text>
            <Text xs base100 opacity={step >= 2 ? "1" : ".5"}>
              Enter the Presale information, in case of trouble check our Docs
            </Text>
          </div>
        </div>
      </div>
      <div className={clsx(classes.stepItem)}>
        <div className={classes.labelContainer}>
          {step >= 4 ? (
            <div className={clsx(classes.number, classes.completed)}>
              <FaCheck className={classes.checkMark} />
            </div>
          ) : (
            <div
              className={clsx(
                classes.number,
                step >= 3 && classes.currentNumber
              )}
            >
              3
            </div>
          )}
        </div>

        <div
          className={[classes.inputsContainer, classes.addressWrapper].join(
            " "
          )}
        >
          <div className={classes.titelAndLabel}>
            <Text
              lg
              base100
              semiBold
              className={step >= 3 && classes.heading}
              opacity={step >= 3 ? "1" : ".5"}
            >
              Submit
            </Text>
            <Text xs base100 opacity={step >= 3 ? "1" : ".5"}>
              Submit your presale
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
