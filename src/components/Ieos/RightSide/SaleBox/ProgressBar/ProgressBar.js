import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

const ProgressBar = ({ progress, max }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progress * max + "%";

  const progressStyle = {
    width: progressPercentage,
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={progressStyle}
          data-value={`${10} BNB`}
        />
      </div>
    </>
  );
};

export default ProgressBar;
