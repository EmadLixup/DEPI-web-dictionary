import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Heading = ({ audioUrl, word, phonetic }) => {
  const ref = useRef();
  const handleAudio = async () => {
    ref.current.play();
  };
  return (
    <>
      <div className="flex flex-row justify-between my-5">
        <h3 className="font-bold text-3xl font-serif">
          {word}
          <span className="  block font-normal text-lg text-purple-500">
            {phonetic}
          </span>
        </h3>
        <button
          onClick={handleAudio}
          className=" h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center"
        >
          <FaPlay className="text-purple-500 h-4 w-4 " />
        </button>
        <audio className="hidden" ref={ref} src={audioUrl} />
      </div>
    </>
  );
};

export default Heading;
