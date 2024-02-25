import React from "react";
import classes from "./SubmitPresale.module.css";
import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import clsx from "clsx";

const SubmitPresale = ({ setStep }) => {
  return (
    <div className={classes.wrapper}>
      <Text base0 xl semiBold>
        Read before submit
      </Text>

      <div className={classes.infoContainer}>
        <Text md base50>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <div className={classes.buttonContainer}>
          <Button
            btnGray
            size="md"
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            className={clsx(classes.button)}
          >
            Cancel
          </Button>{" "}
          <Button
            btnPrimary
            size="md"
            onClick={() => {}}
            className={clsx(classes.confirmButton, classes.button)}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPresale;
