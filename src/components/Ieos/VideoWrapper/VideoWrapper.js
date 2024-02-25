import React from "react";
import ReactPlayer from "react-player";
import classes from "./VideoWrapper.module.css";

const VideoWrapper = ({ url }) => {
  return (
    <div className={classes.videoWrapper}>
      <div className={classes.playerWrapper}>
        <ReactPlayer
          url={url}
          className={classes.reactPlayer}
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
};

export default VideoWrapper;
