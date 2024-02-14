"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ResumeList } from "../../data/resume";
import { iResume } from "../../interface/iResume";

const Resume = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="bg-black-200 py-50">
      <div className="flex flex-col items-center">
        <span className="text-orange-100 text-30 tablet:text-40 laptop:text-56 font-semibold">
          رزومه <span className="text-white-100">من</span>
        </span>
        <div className="my-24 bg-orange-100 h-[3px] relative w-[7.6rem] rounded-4 before:bg-black-200 before:w-[10px] before:absolute before:animate-heading-move before:top-0 before:h-full before:content-[''] before:left-0 after:bg-black-200 after:absolute after:w-[10px] after:animate-heading-move after:top-0 after:h-full after:content-[''] after:left-[21px]"></div>
      </div>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="grid gap-6 grid-cols-1 tablet:grid-cols-2">
          {ResumeList.map((resume: iResume) => {
            return (
              <div className="group relative min-h-[270px] transition duration-500 justify-center bg-black-300 p-40 flex items-center flex-col before:absolute before:h-full before:w-0.5 before:top-0 before:-left-[13px] before:bg-orange-100 hover:bg-orange-100">
                <span className="absolute bg-black-300 -left-[20px] top-0 h-[16px] w-[16px] rounded-[5px] border-2 border-orange-100"></span>
                <h2 className="text-white-100 text-22 font-semibold">
                  {resume.title}
                </h2>
                <span className="text-gray-100 text-17 flex py-24 transition duration-500 group-hover:text-white-100">
                  {resume.company}
                </span>
                <p className="text-center leading-7 text-gray-100 text-16 transition duration-500 group-hover:text-white-100">
                  {resume.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
export default Resume;
