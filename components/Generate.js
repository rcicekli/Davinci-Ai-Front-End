import React from "react";
import { BsStars } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Generate = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-4xl  lg:w-[700px]  xl:max-w-6xl bg-zinc-700 bg-opacity-40 p-4 rounded-3xl border-double border-8 border-zinc-700 border-opacity-20">
        {/* Header Buttons */}
        <div className="flex justify-between mb-5 gap-2 flex-wrap ">
          <div className="flex items-center rounded-full bg-gray-400 bg-opacity-30 hover:bg-gray-600 px-4 py-2">
            <FaHistory className="text-white mr-2" />
            <h1 className="text-sm text-white font-semibold">History</h1>
          </div>
          <div className="flex items-center rounded-full bg-gray-400 bg-opacity-30 hover:bg-gray-600 px-4 py-2">
            <BsStars className="text-white mr-2" />
            <h1 className="text-sm text-white font-semibold">
              I need inspiration
            </h1>
          </div>
        </div>

        {/* Textarea */}
        <div className="mb-4">
          <textarea
            id="message"
            rows="5"
            className="w-full p-4 text-md bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Type here a detailed description of what you want to see in your artwork"
          ></textarea>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col gap-2 sm:flex-row  sm:justify-between">
          <div className="flex items-center rounded-full bg-gray-400 bg-opacity-30 hover:bg-gray-600 px-4 py-2 w-full sm:w-auto justify-center">
            <h1 className="text-sm text-white font-bold flex items-center px-7">
              Style <IoIosArrowDown className=" text-xl" />
            </h1>
          </div>

          <div className="flex items-center rounded-full bg-gray-400 bg-opacity-30 hover:bg-gray-600 px-4 py-2 w-full sm:w-auto justify-center">
            <h1 className="text-sm text-white font-bold flex items-center px-7">
              Model <IoIosArrowDown className=" text-xl" />
            </h1>
          </div>

          <div className="flex items-center rounded-full bg-gray-400 bg-opacity-30 hover:bg-gray-600 px-4 py-2 w-full sm:w-auto justify-center">
            <h1 className="text-sm text-white font-bold flex items-center px-7">
              Ratio <IoIosArrowDown className=" text-xl" />
            </h1>
          </div>

          <div className="flex items-center rounded-full bg-blue-500 hover:bg-blue-400 px-4 py-2 w-full sm:w-auto justify-center cursor-pointer">
            <h1 className="text-md text-white font-bold px-7">Generate</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
