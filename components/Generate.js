import React from "react";
import { BsStars } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Generate = () => {
  return (
    <div className="w-full  sm:h-screen lg:h-screen md:h-screen xs:h-screen  flex justify-center items-center md:mx-auto sm:mx-auto  sm:mb-10">
      <div className=" bg-zinc-700 bg-opacity-40 p-4 rounded-3xl border-double border-8 border-zinc-700 border-opacity-20 md:mx-auto ">
        <div className="flex justify-between bg-opacity-85 mt-2 mb-5  ">
          <div className="hidden xs:flex md:flex sm:flex items-center rounded-full  bg-gray-400 bg-opacity-30 hover:bg-gray-600 ">
            <FaHistory className="mx-0 ml-3 text-white" />
            <h1 className=" text-sm text-white font-semibold mr-3 p-2 ">
              History
            </h1>
          </div>
          <div className="hidden md:flex xs:flex sm:flex items-center rounded-full  bg-gray-400 bg-opacity-30 hover:bg-gray-600  ">
            <BsStars className="mx-0 ml-3 text-white" />
            <h1 className=" text-sm text-white font-semibold mr-3 p-2 ">
              I need a inspiraction
            </h1>
          </div>
        </div>

        <div className=" flex justify-between mx-2 rounded-lg sm:flex xs:flex">
          <textarea
            id="message"
            rows="5"
            className="block p-4 w-full mb-3  text-md bg-zinc-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-700 hover:border hover:ring hover:ring-blue-700"
            placeholder="Type here a detailed description of what you want to see in your artwork"
          ></textarea>
        </div>

        <div className=" md:grid  lg:flex  justify-between mx-3 m-2 mt-0 sm:grid xs:grid ">
          <div className=" md:flex lg:flex items-center rounded-full  bg-gray-400 bg-opacity-30 mx-2 px-2 hover:bg-gray-600 sm:grid  sm:m-1 xs:grid xs:m-1">
            <h1 className="flex text-sm text-white font-bold p-2 mx-auto px-5 ">
              Style <IoIosArrowDown className="ml-1 text-xl" />
            </h1>
          </div>
          <div className=" md:flex  lg:flex items-center rounded-full  bg-gray-400 bg-opacity-30 mx-2 px-2 hover:bg-gray-600 sm:grid sm:m-1 xs:grid xs:m-1">
            <h1 className="flex text-sm text-white font-bold  p-2 mx-auto px-5  ">
              Model <IoIosArrowDown className="ml-1 text-xl" />
            </h1>
          </div>
          <div className=" md:flex  lg:flex items-center rounded-full  bg-gray-400 bg-opacity-30 mx-2 px-2 hover:bg-gray-600 sm:grid sm:m-1 xs:grid xs:m-1 ">
            <h1 className=" flex text-sm text-white font-bold  p-2 mx-auto px-5 ">
              Ratio <IoIosArrowDown className="ml-1 text-xl" />
            </h1>
          </div>
          <div className=" md:flex  lg:flex items-center rounded-full  bg-blue-500 px-4  py-1.5  mx-2 font-semibol w-96 hover:bg-blue-400 cursor-pointer sm:grid sm:m-1 xs:grid xs:m-1">
            <h1 className=" text-md text-white font-bold mx-auto p-2 ">
              Generate
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
