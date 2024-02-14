"use client";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 0 },
};

const Skills = () => {
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
          مهارت های <span className="text-white-100">من</span>
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
        <div className="grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4">
          <div className="bg-black-300 p-20">
            <div className="ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Graphql
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[80%] h-full bg-orange-100 after:content-['80%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                SQL server
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[40%] h-full bg-orange-100 after:content-['40%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                #C
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[40%] h-full bg-orange-100 after:content-['40%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                MVC Architecture
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[80%] h-full bg-orange-100 after:content-['80%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                ASP.NET Web API
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[70%] h-full bg-orange-100 after:content-['70%'] left-0"></div>
              </div>
            </div>
          </div>
          <div className="bg-black-300 p-20">
          <div className="ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                jQuery
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[80%] h-full bg-orange-100 after:content-['80%'] left-0"></div>
              </div>
            </div>
          <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Less
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Sass
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Tailwind
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%'] left-0"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                manual test
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%'] left-0"></div>
              </div>
            </div>
          </div>
          <div className="bg-black-300 p-20">
            <div className="ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                React
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                React Native
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[85%] h-full bg-orange-100 after:content-['85%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Next.js
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[85%] h-full bg-orange-100 after:content-['85%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                Redux toolkit
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                PWA
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%']"></div>
              </div>
            </div>
          </div>
          <div className="bg-black-300 p-20">
          <div className="ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                HTML
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                CSS
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                JavaScript
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%']"></div>
              </div>
            </div>
            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                TypeScript
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-[90%] h-full bg-orange-100 after:content-['90%']"></div>
              </div>
            </div>

            <div className="pt-40 ltr">
              <span className="text-white-100 text-17 flex pb-40 justify-end">
                ECMAScript
              </span>
              <div className="relative h-[6px] bg-white-100 rounded-4">
                <div className="skill relative after:absolute after:text-white-100 after:top-[4px] after:left-0 w-full h-full bg-orange-100 after:content-['100%']"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
