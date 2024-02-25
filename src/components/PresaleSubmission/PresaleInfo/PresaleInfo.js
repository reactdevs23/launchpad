import React, { useRef, useState } from "react";
import classes from "./PresaleInfo.module.css";
import clsx from "clsx";
import Text from "../../common/Text/Text";
import Dropdown from "../../common/Dropdown/Dropdown";
import Input from "../../common/Input/Input";
import SelectDex from "./SelectDex/SelectDex";
import OptionalFeatures from "./OptionalFeatures/OptionalFeatures";
import Button from "../../common/Button/Button";

const PresaleInfo = ({ setStep }) => {
  //token dropdonw
  const tokenDropdownRef = useRef(null);
  const [isTokenDropdownActive, setIsTokenDropdownActive] = useState(false);
  const [selectedToken, setSelectedToken] = useState("Bnb");
  const tokenDropdownItems = ["Bnb", "Usdt", "Btc"];

  //presaleAmount
  const [presaleAmount, setPresaleAmount] = useState("");

  //dexListingRate
  const [dexListingRate, setDexListingRate] = useState("");

  //dexLiquidity
  const [dexLiquidity, setDexLiquidity] = useState("");

  //liquidity lockup days
  const [liquidityLockupDays, setLiquidityLockupDays] = useState("");

  //startDateDropDown
  const startDateDropdownRef = useRef(null);
  const [isStartDropdownActive, setIsStartDateDropdownActive] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(
    "06/02/2023  10:17am"
  );
  const startDateDropdownItems = [
    "06/02/2023  10:17am",
    "07/02/2023  10:18am",
    "08/02/2023  10:19am",
  ];

  //endDateDropDown
  const endDateDropdownRef = useRef(null);
  const [isEndDropdownActive, setIsEndDateDropdownActive] = useState(false);
  const [selectedEndDate, setSelectedEndDate] = useState("06/02/2023  10:17am");
  const endDateDropdownItems = [
    "06/02/2023  10:17am",
    "07/02/2023  10:18am",
    "08/02/2023  10:19am",
  ];

  //dexListingDate
  const [dexListingDate, setDexListingDate] = useState("");

  //presaleType
  const presaleTypeDropdownRef = useRef(null);
  const [isPresaleTypeDropdownActive, setIsPresaleTypeDropdownActive] =
    useState(false);
  const [selectedPresaleType, setSelectedPresaleType] = useState("Public");
  const presaleTypeDropdownItems = ["Public", "Private", "Protected"];
  return (
    <div className={classes.mainWrapper}>
      <div className={clsx(classes.wrapper)}>
        <Text sm base100>
          Fund Raising Token
        </Text>
        <div ref={tokenDropdownRef}>
          <Dropdown
            isActive={isTokenDropdownActive}
            setActive={setIsTokenDropdownActive}
            selectedValue={selectedToken}
            onSelect={(val) => {
              setSelectedToken(val);
              setIsTokenDropdownActive(false);
            }}
            dropdownItems={tokenDropdownItems}
            dropdownRef={tokenDropdownRef}
          />
        </div>
      </div>
      <div className={classes.wrapper}>
        <Input
          rootClassName={classes.input}
          label="Presale Amount"
          type="number"
          placeholder="0.0"
          value={presaleAmount}
          onChange={(e) => {
            setPresaleAmount(e.target.value);
          }}
        />
        <Text xs success>
          Total amount of token for fair launch
        </Text>
      </div>
      <div className={classes.wrapper}>
        <Input
          rootClassName={classes.input}
          label="Dex Listing Rate / Presale Rate (%)"
          warningText="Dex Rate should be equal or less than 100%"
          type="number"
          placeholder="0.0"
          value={dexListingRate}
          onChange={(e) => {
            setDexListingRate(e.target.value);
          }}
        />
        <div>
          <Text xs success className={classes.dexListingRateInfo}>
            Ex; 100 = sale rate and dex listing is the same price,
          </Text>{" "}
          <Text xs success className={classes.dexListingRateInfo}>
            50 = sale rate is 2x better than dex listing price
          </Text>
        </div>
      </div>{" "}
      <div className={classes.wrapper}>
        <Input
          rootClassName={classes.input}
          label="Dex Liquidity (%)"
          type="number"
          placeholder="0.0"
          value={dexLiquidity}
          onChange={(e) => {
            setDexLiquidity(e.target.value);
          }}
        />
      </div>{" "}
      <div className={classes.wrapper}>
        <Input
          rootClassName={classes.input}
          label="Liquidity Lockup (days)"
          type="number"
          placeholder="0.0"
          value={liquidityLockupDays}
          onChange={(e) => {
            setLiquidityLockupDays(e.target.value);
          }}
        />
      </div>{" "}
      <SelectDex />
      <div className={clsx(classes.wrapper)}>
        <Text sm base100>
          Start Date (UTC)
        </Text>
        <div ref={startDateDropdownRef}>
          <Dropdown
            isActive={isStartDropdownActive}
            setActive={setIsStartDateDropdownActive}
            selectedValue={selectedStartDate}
            onSelect={(val) => {
              setSelectedStartDate(val);
              setIsStartDateDropdownActive(false);
            }}
            dropdownItems={startDateDropdownItems}
            dropdownRef={startDateDropdownRef}
          />
        </div>
      </div>{" "}
      <div className={clsx(classes.wrapper)}>
        <Text sm base100>
          EndDate (UTC)
        </Text>
        <div ref={endDateDropdownRef}>
          <Dropdown
            isActive={isEndDropdownActive}
            setActive={setIsEndDateDropdownActive}
            selectedValue={selectedEndDate}
            onSelect={(val) => {
              setSelectedEndDate(val);
              setIsEndDateDropdownActive(false);
            }}
            dropdownItems={endDateDropdownItems}
            dropdownRef={endDateDropdownRef}
          />
        </div>
      </div>
      <div className={classes.wrapper}>
        <Input
          rootClassName={classes.input}
          label="Estimated Dex Listing Date (UTC)"
          info="Dex Date should be equal or less than 100%"
          type="number"
          placeholder="0.0"
          value={dexListingDate}
          onChange={(e) => {
            setDexListingDate(e.target.value);
          }}
        />
        <div>
          <Text xs success>
            Total amount of token for fair launch
          </Text>
        </div>
      </div>
      <Text primaryDefault sm className={classes.readMore}>
        Read more about presale type here Docs
      </Text>
      <div className={clsx(classes.wrapper)}>
        <Text sm base100>
          Presale Type
        </Text>
        <div ref={presaleTypeDropdownRef}>
          <Dropdown
            isActive={isPresaleTypeDropdownActive}
            setActive={setIsPresaleTypeDropdownActive}
            selectedValue={selectedPresaleType}
            onSelect={(val) => {
              setSelectedPresaleType(val);
              setIsPresaleTypeDropdownActive(false);
            }}
            dropdownItems={presaleTypeDropdownItems}
            dropdownRef={presaleTypeDropdownRef}
          />
        </div>
      </div>
      <OptionalFeatures />{" "}
      <Text primaryDefault sm className={classes.lockYourTeam}>
        Lock your team tokens with a vesting schedule for further transparency
        and trust.
      </Text>
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
      </div>{" "}
    </div>
  );
};

export default PresaleInfo;
