import {
  MeetingConsumer,
  Constants,
  MeetingProvider,
  useMeeting,
} from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef } from "react";
import Hls from "hls.js";
//   import { authToken } from "../api";
import { authToken } from "./Api";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import ChatView from "./ChatView";

const HLSPlayer = () => {
  const { hlsUrls, hlsState } = useMeeting();

  const playerRef = useRef(null);

  const hlsPlaybackHlsUrl = useMemo(() => hlsUrls.playbackHlsUrl, [hlsUrls]);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        autoStartLoad: true,
        defaultAudioCodec: "mp4a.40.2",
      });

      let player = document.querySelector("#hlsPlayer");

      hls.loadSource(hlsPlaybackHlsUrl);
      hls.attachMedia(player);
    } else {
      if (typeof playerRef.current?.play === "function") {
        playerRef.current.src = hlsPlaybackHlsUrl;
        playerRef.current.play();
      }
    }
  }, [hlsPlaybackHlsUrl, hlsState]);

  return (
    <video
      ref={playerRef}
      id="hlsPlayer"
      autoPlay
      controls
      style={{ width: "100%", height: "100%" }}
      playsInline
      height={"100%"}
      playing
      onError={(err) => console.log(err, "hls video error")}
    ></video>
  );
};

// const ViewerScreenContainer = ({ meetingId }) => {
const ViewerScreenContainer = () => {
  const { meetingId } = useParams();

  return (
    <>
      <div className="flex w-full justify-between mt-[8rem] my-[2rem]">
        <MeetingProvider
          token={authToken}
          // config={{ meetingId, name: "C.V. Raman", mode: "VIEWER" }}
          config={{ meetingId, name: "C.V. Raman", mode: "VIEWER" }}
          joinWithoutUserInteraction
        >
          <div className=" border shadow-sm rounded-md flex justify-center items-center bg-blue-50 w-[100%] h-[30rem] mx-[1rem]">
             <MeetingConsumer>
            {({ hlsState }) =>
              hlsState === Constants.hlsEvents.HLS_PLAYABLE ? (
                <HLSPlayer />
              ) : (
                <div>
                  <p className="text-center">Waiting for host to start stream...</p>
                  <Loading />
                </div>
              )
            }
          </MeetingConsumer>
          </div>
         
          <div className="border shadow-sm rounded-md flex justify-center items-center bg-blue-50 h-[30rem] mr-[1rem]">
            <ChatView/>
          </div>
        </MeetingProvider>
      </div>

    </>

  );
};

export default ViewerScreenContainer;
