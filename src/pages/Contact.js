import React, { useEffect } from "react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import Layout from "../components/Layout";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_mwawjro9.json"
            background="transparent"
            speed="1"
            loop
            autoplay></lottie-player>
        </div>
        <div className="w-screen flex justify-center">
          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
            <h1 className="text-2xl font-semibold text-center">Contact me to know more</h1>
            <input
              placeholder="Name"
              type="text"
              className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
            />
            <input
              placeholder="Email"
              type="text"
              className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
            />
            <textarea
              placeholder="Query"
              type="text"
              className="w-full border-2 border-gray-400 rounded-md p-1 shadow-lg mt-5"
            />
            <div className="flex justify-center">
              <button className="bg-red-500 rounded text-white px-5 py-1 mt-5 w-1/2 h-12">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
