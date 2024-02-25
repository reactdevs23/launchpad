import React, { useEffect, useState } from "react";
import classes from "./CountDown.module.css";
import Text from "../../../../common/Text/Text";

const CountDown = ({ time, text, background }) => {
  const endTime = new Date(time).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const [timeisOver, setTimeIsOver] = useState(false);
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    if (gap <= 0) {
      setTimeIsOver(true);
    } else {
      const timeoutId = setTimeout(
        () => setcurrentTime(new Date().getTime()),
        1000
      );
      return () => clearTimeout(timeoutId);
    }
  }, [currentTime, gap]);

  return (
    <div className={classes.wrapper}>
      {timeisOver ? (
        <Text lg base50>
          Time Is Over
        </Text>
      ) : (
        <>
          <Text lg base50 className={classes.count}>
            <span
              className={classes.count}
              style={{ background: background }}
            >{`${day < 10 ? "0" + day : day}`}</span>
          </Text>
          <Text lg base50>
            :
          </Text>
          <Text
            lg
            base50
            className={classes.count}
            style={{ background: background }}
          >{`${hour < 10 ? "0" + hour : hour}`}</Text>
          <Text lg base50>
            :
          </Text>
          <Text
            lg
            base50
            className={classes.count}
            style={{ background: background }}
          >{`${minute < 10 ? "0" + minute : minute}`}</Text>
          <Text lg base50>
            :
          </Text>
          <Text
            lg
            base50
            className={classes.count}
            style={{ background: background }}
          >
            {`${second < 10 ? "0" + second : second}`}
          </Text>
        </>
      )}
    </div>
  );
};

export default CountDown;
