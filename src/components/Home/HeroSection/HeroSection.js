import React from "react";
import classes from "./HeroSection.module.css";
import Highlight from "../../common/Highlight/Highlight";
import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import { heroBottomImgs } from "../../../assets";
import Wrapper from "../../common/Wrapper/Wrapper";
import Counter from "../../common/Counter/Counter";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className={classes.leftSide}>
        <p className={classes.heading}>Explore Token</p>
        <h2 className={classes.title}>
          {" "}
          <Highlight>Tokenizing</Highlight> the Future
        </h2>
        <Text base100 xl mobileCenter>
          DAO Maker develops next-generation digital financial solutions.
          Trusted by more than 1,000,000 users across the world.
        </Text>
        <div className={classes.buttonContainer}>
          <Button size="md" btnPrimary>
            Launchpad
          </Button>{" "}
          <Button size="md" btnBlack>
            DAO Token
          </Button>
        </div>
        <img src={heroBottomImgs} alt="#" className={classes.bottomImg} />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.box}>
          <h2 className={classes.title}>
            <Counter end={76} />
            <Text xl3 base0 bold>
              billion
            </Text>
          </h2>
          <Text lg base100 className={classes.text}>
            Cryptocurrency listed
          </Text>
        </div>
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <h2 className={classes.title}>
              <Counter end={600} />
              <Text xl3 base0 bold>
                +
              </Text>
            </h2>
            <Text lg base100 className={classes.text}>
              Cryptocurrency listed
            </Text>
          </div>
          <div className={classes.box}>
            <h2 className={classes.title}>
              &lt; <Counter end={0.1} />
              <Text xl3 base0 bold>
                %
              </Text>
            </h2>
            <Text lg base100 className={classes.text}>
              Lowest fees
            </Text>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
