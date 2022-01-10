import React, { useEffect } from "react";
import {
  FaReact,
  FaNode,
  FaAngular,
  FaJava,
  FaBootstrap,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaJs,
  FaJsfiddle,
  FaDatabase,
} from "react-icons/fa";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <div className="min-h-screen bg-theme">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 h-screen items-center border-4 border-white transform rotate-12 md:rotate-0 mx-10 z-10 bg-theme">
            <div className="h-1/2">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5 text-center">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hii, I am <b className="text-yellow-500">Shivesh</b>
              </h1>
              <h1 className="text-4xl md:text-2xl" data-aos="slide-left">
                Fullstack <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-8" data-aos="slide-up">
            Technologies I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact size={180} color="cyan" className="w-full text-center mt-20" />
            <FaDatabase size={180} color="aero" className="w-full text-center mt-20 animate-bounce" />
            <FaJava size={180} color="purple" className="w-full text-center mt-20 animate-bounce" />
            <FaNode size={180} color="green" className="w-full text-center mt-20" />
            <FaBootstrap size={180} color="blue" className="w-full text-center mt-20 animate-bounce" />
            <FaJsSquare size={180} color="green" className="w-full text-center mt-20" />
            <FaHtml5 size={180} color="orange" className="w-full text-center mt-20" />
            <FaCss3 size={180} color="cadetblue" className="w-full text-center mt-20 animate-bounce" />
          </div>
        </div>

        {/* JavaScript Buff section */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">Yes You Are Right...I am a JavaScript Buff</h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay></lottie-player>
            </div>
            <p className="text-center text-xl my-5 font-semibold md:px-5 px-14 py-10">
              JavaScript is one of the most top-ranked programming languages because of its ubiquitous use on all
              platforms and mass adoption. Main Use Cases: Web Development.
            </p>
          </div>
        </div>

        {/* Dev Stack Section */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-400">
            <h1 className="text-white font-bold text-4xl py-10">My DEV Stack</h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed="1"
                loop
                autoplay></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold mt-2">HTML/CSS</p>
                <p className="font-semibold mt-2">React</p>
                <p className="font-semibold mt-2">JavaScript</p>
                <p className="font-semibold mt-2">NodeJs</p>
                <p className="font-semibold mt-2">Redux</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-2">Bootstrap</p>
                <p className="font-semibold mt-2">Tailwind</p>
                <p className="font-semibold mt-2">Ant Design</p>
                <p className="font-semibold mt-2">Material UI</p>
                <p className="font-semibold mt-2">Semantic UI</p>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold">Back End</h1>
                <hr />
                <p className="font-semibold mt-2">NodeJs</p>
                <p className="font-semibold mt-2">ExpressJs</p>
                <p className="font-semibold mt-2">MongoDB</p>
                <p className="font-semibold mt-2">Java</p>
                <p className="font-semibold mt-2">MySQL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">Who is Shivesh?</h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_dcatp5cr.json"
                background="transparent"
                speed="1"
                loop
                autoplay></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">
                Hi, Hellooooo
                <hr />
                <pre className="text-xl md:text-sm my-5 font-mont">
                  {JSON.stringify(
                    {
                      name: "Shivesh Dewangan",
                      age: null,
                      gender: "Male",
                      country: "AUSTRALIA",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
