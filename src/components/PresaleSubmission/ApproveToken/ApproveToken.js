import React, { useState } from "react";
import classes from "./ApproveToken.module.css";
import Button from "../../common/Button/Button";
import Text from "../../common/Text/Text";
import Switch from "../../common/Switch/Switch";

const ApproveToken = ({ setStep }) => {
  const [formState, setFormState] = useState();

  const inputChangeHandler = (e) => {
    const { checked } = e.target;

    setFormState(checked);
  };

  return (
    <div className={classes.wrapper}>
      <Text base0 lg semiBold>
        Token Address
      </Text>

      <div className={classes.addressContainer}>
        <div className={classes.address}>
          <Text base50 md textCenter onClick={() => {}}>
            RO98jvbVe8Rlnk6bmphM8DorEnK
          </Text>
        </div>
        <Button
          btnPrimary
          size="md"
          onClick={() => {}}
          className={classes.button}
        >
          Create
        </Button>
      </div>

      <div className={classes.bottomBar}>
        <Text md base50>
          Launch a Stealth Sale
        </Text>
        <Switch checked={formState} onChange={inputChangeHandler} mlAuto />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          btnGray
          size="md"
          onClick={() => {
            setStep((prev) => prev - 1);
          }}
        >
          Cancel
        </Button>{" "}
        <Button
          btnPrimary
          size="md"
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApproveToken;
