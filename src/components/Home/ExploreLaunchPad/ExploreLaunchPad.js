import React, { useEffect, useState } from "react";
import classes from "./ExploreLaunchPad.module.css";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import Highlight from "../../common/Highlight/Highlight";
import { banner, magnifier, oracle } from "../../../assets";
import SingleProject from "./SingleProject/SingleProject";
import Button from "../../common/Button/Button";
const projects = [
  {
    status: "Upcoming",
    feature: ["Kyc", "audit"],
    image: banner,
    icon: oracle,
    title: "Oracle AI",
    info: "Fair Launch - Max : 1 ETH",
    softcap: "5 ETH",
    hardcap: "70 ETH",
    locked: "180 Days",
    liquidity: "51%",
    progress: 10,
    startPrice: 0,
    endPrice: 100,
    listingTime: "2023 - 06 - 09",
  },
  {
    status: "Upcoming",
    feature: ["Kyc", "audit"],
    image: banner,
    icon: oracle,
    title: "Oracle AI",
    info: "Fair Launch - Max : 1 ETH",
    softcap: "5 ETH",
    hardcap: "70 ETH",
    locked: "180 Days",
    liquidity: "51%",
    progress: 10,
    startPrice: 0,
    endPrice: 100,
    listingTime: "2023 - 06 - 09",
  },
  {
    status: "Upcoming",
    feature: ["Kyc", "audit"],
    image: banner,
    icon: oracle,
    title: "Oracle AI",
    info: "Fair Launch - Max : 1 ETH",
    softcap: "5 ETH",
    hardcap: "70 ETH",
    locked: "180 Days",
    liquidity: "51%",
    progress: 10,
    startPrice: 0,
    endPrice: 100,
    listingTime: "2023 - 06 - 09",
  },
];
const ExploreLaunchPad = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(projects);
  useEffect(() => {
    setFilteredItems(
      projects.filter((el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);
  return (
    <section className={classes.wrapper}>
      <SectionHeading>
        Explore <Highlight>Launchpad</Highlight>
      </SectionHeading>
      <div className={classes.searchContainer}>
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />{" "}
        <img src={magnifier} alt="magnifier" className={classes.icon} />
      </div>
      <div className={classes.projects}>
        {filteredItems.map((el, i) => (
          <SingleProject {...el} key={i} />
        ))}
      </div>
      <Button btnPrimary size="md" onClick={() => {}}>
        Explore All
      </Button>
    </section>
  );
};

export default ExploreLaunchPad;
