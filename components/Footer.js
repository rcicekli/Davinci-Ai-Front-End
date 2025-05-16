import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="w-1/3 flex mx-auto mb-0 h-auto object-contain">
        <img
          src="/logoyeni.png"
          alt="Team Member 8"
          className=" w-full h-full rounded-lg mb-4"
        />
      </div>

      <div className="mx-auto flex md:flex-row xs:flex-col items-center justify-center ">
        <div className="  items-center justify-center  px-1 py-1 mx-3 cursor-pointer bg-transparent  ">
          <h1 className=" text-sm text-white  mx-auto p-3 px-4">
            Privacy & Cookie Notice
          </h1>
        </div>
        <div className="   items-center    px-1 py-1 mx-3 cursor-pointer bg-transparent  ">
          <h1 className=" text-sm text-white  mx-auto p-3 px-4">
            App Privacy Notice
          </h1>
        </div>
        <div className=" items-center    px-1 py-1 mx-3 cursor-pointer bg-transparent  ">
          <h1 className=" text-sm text-white mx-auto p-3 px-4  ">
            Terms of Service
          </h1>
        </div>
        <div className="   items-center   px-1 py-1 mx-3 0  cursor-pointer bg-transparent  ">
          <h1 className=" text-sm text-white  mx-auto p-3 px-4 ">
            Refund Policy
          </h1>
        </div>
        <div className="  items-center   px-1 py-1 mx-3  cursor-pointer bg-transparent ">
          <h1 className=" text-sm text-white mx-auto p-3 px-4 ">Contact us</h1>
        </div>
      </div>
      <h1 className="text-gray-500 font-normal text-md mb-10 mx-auto my-10 flex items-center justify-center">
        © 2024 All rights reserved
      </h1>

      <div className="flex justify-center p-3">
        <div className="hidden md:flex items-center rounded-full text-xl text-white font-extrabold bg-gray-500 bg-opacity-40 p-4 mx-3 cursor-pointer hover:bg-gray-600">
          <FaFacebook />
        </div>
        <div className="hidden md:flex items-center rounded-full text-xl text-white font-extrabold bg-gray-500 bg-opacity-40 p-4 mx-3 cursor-pointer hover:bg-gray-600">
          <FaInstagram />
        </div>
        <div className="hidden md:flex items-center rounded-full text-xl text-white font-extrabold bg-gray-500 bg-opacity-40 p-4 mx-3 cursor-pointer hover:bg-gray-600">
          <FaTiktok />
        </div>
      </div>
    </div>
  );
};

export default Footer;
