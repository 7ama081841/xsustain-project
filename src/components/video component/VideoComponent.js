import React, { useEffect, useRef, useState } from "react";
import "./videoComponent.css";
import video from "../../videos/361085177_7233005603393129_7507889925289982485_n.mp4";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const VideoComponent = () => {
    const [play, setPlay] = useState(false);

    const playVideo = useRef();

    const handlePlay = () => {
        setPlay(true);

        playVideo.current.play();
    };

    return (
        <div className="videoComponent">
            <video ref={playVideo} controls width="300" height="300">
                <source type="video/mp4" src={video} />
            </video>
            <div
                className="video-cover"
                style={{ display: play ? "none" : "" }}
            >
                <div className="overlay">
                    <div className="play-icon" onClick={handlePlay}>
                        <PlayArrowOutlinedIcon sx={{ fontSize: "50px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
