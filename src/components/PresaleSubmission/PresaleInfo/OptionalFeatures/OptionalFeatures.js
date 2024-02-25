import React, { useState } from "react";
import classes from "./OptionalFeatures.module.css";
import Switching from "../Switching/Switching";
import Text from "../../../common/Text/Text";

const OptionalFeatures = () => {
  //Anti Sniper Protection
  const [antiSniperProtection, setAntiSniperProtection] = useState(false);

  //Bonus Sale
  const [bonusSale, setBonusSale] = useState(false);

  //Add Team Token Vesting
  const [addTeamTokenVesting, setAddTeamTokenVesting] = useState(false);

  //Add Presale Vesting
  const [addPresaleVesting, setAddPresaleVesting] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Text base100 sm>
        Optional Features:
      </Text>
      <Switching
        first
        label="Anti Sniper Protection"
        isChecked={antiSniperProtection}
        setIsChecked={setAntiSniperProtection}
      />{" "}
      <Switching
        label="Bonus Sale"
        isChecked={bonusSale}
        setIsChecked={setBonusSale}
      />{" "}
      <Switching
        label="Add Team Token Vesting"
        isChecked={addTeamTokenVesting}
        setIsChecked={setAddTeamTokenVesting}
      />{" "}
      <Switching
        label="Add Presale Vesting"
        isChecked={addPresaleVesting}
        setIsChecked={setAddPresaleVesting}
        last
      />
    </div>
  );
};

export default OptionalFeatures;
