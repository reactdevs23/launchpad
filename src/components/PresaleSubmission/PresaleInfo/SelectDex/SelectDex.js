import React, { useRef, useState } from "react";
import classes from "./SelectDex.module.css";
import clsx from "clsx";
import Text from "../../../common/Text/Text";
import Dropdown from "../../../common/Dropdown/Dropdown";
import Input from "../../../common/Input/Input";
import Switching from "../Switching/Switching";

const SelectDex = () => {
  //select dex what will be used to add liquidity
  const [selectedDex, setSelectedDex] = useState("PancakeSwap");
  const dexDropdownRef = useRef(null);
  const [isDexDropdownActive, setIsDexDropdownActive] = useState(false);
  const dexDropdownItems = ["PancakeSwap", "PancakeSwap1", "PancakeSwap2"];
  //Soft Cap(BNB)
  const [softCap, setSoftCap] = useState("");

  //add hard cap limit
  const [addHardCapLimit, setAddHardCapLimit] = useState(false);

  //Add maximum buy limit
  const [maximumBuyLimit, setMaximumBuyLimit] = useState(false);

  //Set Sale Time (Uncheck to add it anytime after Sale Listing)
  const [saleTime, setSaleTime] = useState(false);
  return (
    <div className={clsx(classes.wrapper)}>
      <Text sm base100>
        Select what DEX will be used to add liquidity.
      </Text>
      <div ref={dexDropdownRef}>
        <Dropdown
          styled
          isActive={isDexDropdownActive}
          setActive={setIsDexDropdownActive}
          selectedValue={selectedDex}
          onSelect={(val) => {
            setSelectedDex(val);
            setIsDexDropdownActive(false);
          }}
          dropdownItems={dexDropdownItems}
          dropdownRef={dexDropdownRef}
        />{" "}
      </div>{" "}
      <Input
        rootClassName={classes.input}
        type="text"
        placeholder="Soft Cap(BNB)"
        value={softCap}
        onChange={(e) => {
          setSoftCap(e.target.value);
        }}
        styled
      />
      <Switching
        label="Add Hard Cap Limit"
        isChecked={addHardCapLimit}
        setIsChecked={setAddHardCapLimit}
      />{" "}
      <Switching
        label="Add maximum buy limit"
        isChecked={maximumBuyLimit}
        setIsChecked={setMaximumBuyLimit}
      />{" "}
      <Switching
        label="Set Sale Time (Uncheck to add it anytime after Sale Listing)"
        isChecked={saleTime}
        setIsChecked={setSaleTime}
        last
      />
    </div>
  );
};

export default SelectDex;
