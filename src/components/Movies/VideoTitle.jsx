import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[50%] md:pt-[20%] px-8 md:px-15 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-md md:text-xl font-bold">{title}</h1>
      <p className="hidden md:block w-1/2 text-sm py-4">{overview}</p>
      <div className="my-1 md:my-0">
        <button className="bg-white text-black p-1 md:p-2 md:px-10 text-md md:text-xl rounded-sm hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 px-10 p-2 bg-gray-500 rounded-sm bg-opacity-50 text-xl text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
