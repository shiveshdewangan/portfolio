import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-44 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,224L0,96L205.7,96L205.7,224L411.4,224L411.4,128L617.1,128L617.1,32L822.9,32L822.9,288L1028.6,288L1028.6,128L1234.3,128L1234.3,160L1440,160L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"></path>
        </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="bg-theme p-10 font-mont text-center">
            <p className="text-gray-50 pb-5">Designed and Developed By</p>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <div className="flex text-white w-full justify-between py-5">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedinIn />
              <FaMailBulk />
              <FaGithub />
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <p className="text-gray-50 my-2">Shivesh Dewangan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
