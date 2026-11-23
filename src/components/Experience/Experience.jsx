import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div
          className="
            absolute
            left-6
            md:left-1/2
            top-0
            bottom-0
            w-1
            bg-white
            md:-translate-x-1/2
          "
        ></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative flex flex-col md:flex-row mb-20 md:mb-28"
          >

            {/* Timeline Circle */}
            <div
              className="
                absolute
                left-6
                md:left-1/2
                top-8
                -translate-x-1/2
                w-16
                h-16
                rounded-full
                bg-white
                border-4
                border-[#8245ec]
                flex
                items-center
                justify-center
                z-20
                shadow-[0_0_20px_5px_rgba(130,69,236,0.35)]
              "
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-contain rounded-full p-1"
              />
            </div>

            {/* Card */}
            <div
              className={`
                w-full
                md:w-[46%]
                ml-14
                md:ml-0
                ${
                  index % 2 === 0
                    ? "md:mr-auto"
                    : "md:ml-auto"
                }
              `}
            >
              <div
                className="
                  p-6
                  md:p-8
                  rounded-2xl
                  border
                  border-white
                  bg-gray-900
                  backdrop-blur-md
                  shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >

                {/* Header */}
                <div className="flex items-center gap-5">

                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Role + Company + Date */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <h4 className="text-md text-gray-300 mt-1">
                      {experience.company}
                    </h4>

                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 text-gray-400 leading-relaxed">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-6">
                  <h5 className="font-semibold text-white text-lg">
                    Skills:
                  </h5>

                  <ul className="flex flex-wrap mt-3 gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="
                          bg-[#8245ec]
                          text-gray-200
                          px-4
                          py-1.5
                          text-xs
                          md:text-sm
                          rounded-lg
                          border
                          border-gray-400
                        "
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;