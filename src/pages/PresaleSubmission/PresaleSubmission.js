import clsx from "clsx";
import { useState } from "react";

import classes from "./PresaleSubmission.module.css";

import Steps from "../../components/PresaleSubmission/Steps/Steps";

import ApproveTokenWarningContainer from "../../components/PresaleSubmission/ApproveToken/WarningContainer/WarningContainer";
import ApproveToken from "../../components/PresaleSubmission/ApproveToken/ApproveToken";
import SubmitPresale from "../../components/PresaleSubmission/SubmitPresale/SubmitPresale";
import PresaleInfo from "../../components/PresaleSubmission/PresaleInfo/PresaleInfo";
import PresaleInfoWarningContainer from "../../components/PresaleSubmission/PresaleInfo/WarningContainer/WarningContainer";

const PresaleSubmission = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={clsx(classes.mainWrapper, "paddingTop", "container")}>
      <div className={clsx(classes.wrapper)}>
        <Steps step={step} />
        {step === 1 && <ApproveToken setStep={setStep} />}
        {step === 2 && <PresaleInfo setStep={setStep} />}
        {step === 3 && <SubmitPresale setStep={setStep} />}
      </div>
      {step === 1 && <ApproveTokenWarningContainer />}{" "}
      {step === 2 && <PresaleInfoWarningContainer />}
    </div>
  );
};

export default PresaleSubmission;
//
