import React from "react";
import Header from "./component/header";
import Hero from "./component/hero";
import About from "./component/about";
import Resume from "./component/resume";
import Skills from "./component/skills";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-100">
        <Header />
        <div className="mobile:max-w-[720px] w-[90%] tablet:max-w-[960px] laptop:max-w-[1140px] desktop:max-w-[1320px] mx-auto">
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="Skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"></div> */}
      </main>
    </>
  );
}

export default App;
