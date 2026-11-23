import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-base md:text-lg font-semibold max-w-3xl mx-auto">
          My academic journey and educational background, from school education
          to my current B.Tech degree in Computer Science and Engineering.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Timeline Line */}
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

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
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
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded-full p-1"
              />
            </div>

            {/* Card Container */}
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
              {/* Education Card */}
              <div
                className="
                  p-5
                  md:p-7
                  rounded-2xl
                  border
                  border-white
                  bg-gray-900
                  backdrop-blur-md
                  shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_0_30px_3px_rgba(130,69,236,0.4)]
                "
              >

                {/* Header */}
                <div className="flex items-start gap-4 md:gap-5">

                  {/* Education Logo */}
                  <div
                    className="
                      w-16
                      h-16
                      md:w-20
                      md:h-20
                      bg-white
                      rounded-xl
                      overflow-hidden
                      flex-shrink-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Degree / School / Date */}
                  <div className="flex-1 min-w-0">

                    <h3
                      className="
                        text-lg
                        md:text-xl
                        font-bold
                        text-white
                        leading-snug
                      "
                    >
                      {edu.degree}
                    </h3>

                    <h4
                      className="
                        text-sm
                        md:text-base
                        text-gray-300
                        mt-2
                        leading-relaxed
                      "
                    >
                      {edu.school}
                    </h4>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mt-2
                        font-medium
                      "
                    >
                      {edu.date}
                    </p>

                  </div>
                </div>

                {/* Grade */}
                <div className="mt-5">
                  <span
                    className="
                      inline-block
                      bg-[#8245ec]
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-semibold
                      border
                      border-purple-400
                    "
                  >
                    Grade: {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-gray-400
                    text-sm
                    md:text-base
                    leading-relaxed
                  "
                >
                  {edu.desc}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;