import {
  MeetingConsumer,
  Constants,
  MeetingProvider,
  useMeeting,
} from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Hls from "hls.js";
//   import { authToken } from "../api";
import { authToken } from "./Api";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import ChatView from "./ChatView";
import api from "../Api/Api_config";

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
  const { meetingId, scheduledClassId } = useParams();
const [classInfo, setClassInfo] = useState({});
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0OWZkNjU0Ny1lZDQ0LTRhZGYtYTExMi1iOWNmMjlmNDU3NmEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyOTIxODcyMSwiZXhwIjoxNzI5MjI5NTIxfQ.UCz42lWsmJ1Wib4ihYi9n-U1Xtqr5XMxulB0fGxEsVA";
  // const meetingId = "h30c-92ne-06bt";
  const joinNow = async () => {
    try {
        const res = await api.post(`api/liveclass/joinNow`, {
          meetingId,
          scheduledClassId,
          role: 'student'
        });
        if (res?.status === 200) {
            setClassInfo(res?.data)
        }
    } catch (error) {
        console.log("Error while fetching scheduled class data", error);
    }
}
useEffect(() => {
    joinNow();
}, []);

  return (
    <>
      <div className="flex w-full justify-between mt-[8rem] my-[2rem]">
      {classInfo?.token ? (
      <MeetingProvider
          // token={authToken}
          token={classInfo?.token}
          // token={`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0OWZkNjU0Ny1lZDQ0LTRhZGYtYTExMi1iOWNmMjlmNDU3NmEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sInZlcnNpb24iOjIsInJvb21JZCI6IjJreXYtZ3pheS02NHBnIiwicGFydGljaXBhbnRJZCI6Imx4dmRwbHd0IiwiaWF0IjoxNzI3Njk0MDIwLCJleHAiOjE3Mjc3MDQ4MjB9.NnDHA_ioZ-VMw8Jnu4Rd-3QDIWGFLEhxIi_vitMigqA`}
          // config={{ meetingId, name: "C.V. Raman", mode: "VIEWER" }}
          config={{ meetingId, name: `${classInfo?.user_name || 'User'}`, mode: "VIEWER" }}
          // config={{ meetingId:"c8m5-zj0q-h0lu", name: "C.V. Raman", mode: "VIEWER" }}
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
        ) : "Loading"
        }
      </div>

    </>

  );
};

export default ViewerScreenContainer;
