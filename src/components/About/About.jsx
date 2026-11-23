import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-[7vw] md:px-[10vw] lg:px-[20vw] text-white mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Shashwat Maurya
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-purple-500">
            <span className="text-white">I am a </span>

            <Typewriter
              words={[
                "Fullstack Developer",
                "Web Developer",
                "Software Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-gray-400 mb-10 mt-6 leading-relaxed">
            I am a full-stack developer skilled in MERN stack and modern
            technologies. I create scalable and efficient web applications.
          </p>

          <a
            href="https://drive.google.com/file/d/1hMgn-wzizxWrpIgJeWW9dqVHPAaKnZbK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT SIDE (TILT IMAGE) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem]"
          >
            <img
              src={profileImage}
              alt="profile"
              className="w-full h-full rounded-full object-cover border-4 border-purple-600 shadow-lg"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;