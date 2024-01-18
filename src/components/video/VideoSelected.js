import React from "react";
import Iframe from "./Iframe";

import "./videoselected.css";

const VideoSelected = (props) => {
  return (
    <div className="header-class-video-selected">
      <div className="video-selected">
        <div className="iframe-container">
          {props.selectedVideoUrl ? (
            <Iframe
              width="1000"
              height="500"
              link={props.selectedVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              fullscreen="allowFullscreen"
            />
          ) : (
            <Iframe
              width="1000"
              height="500"
              link="https://www.youtube.com/embed/1seDxMwxfYk?si=h_Ho0z2gdLSvTEkB"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              fullscreen="allowFullscreen"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSelected;
