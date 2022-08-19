import React from "react";
import herovid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] ">
      <video
        src={herovid}
        className="object-cover h-full w-full absolute -z-10"
        autoPlay
        loop
        muted
      ></video>
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
      <h1>Decentralized</h1>
      <h1 className="py-2">
          <span className="text-[#00d8ff]">Trading </span>Protocol
      </h1>
      <p className='text-xl py-4'>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className='bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 rounded-3xl m-2'>Use Defi</button>  
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
      </div>
    </div>
  );
};
export default Hero;
