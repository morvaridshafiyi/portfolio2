"use client";
import iconSet from "../../assets/style/selection.json";
import IcomoonReact from "icomoon-react";
import heroImage from "../../assets/image/hero.png";
import { useEffect } from "react";
import Button from "../button";

const Hero = () => {
  const words = ["وبسایت. ", "موبایل. ", "بازی. "];
  let index = 0;
  const staticText = " برنامه نویس ";

  function typeWord() {
    const word = words[index];
    let i = 0;

    function type() {
      const paragraph: any = document.getElementById("typing");

      if (i < word.length) {
        paragraph.innerHTML =
          staticText +
          `<span className="flex text-white-100 text-56 font-semibold">
          <span style="color:#ff4904"> ${words[index].substring(0, i)}|</span>
        </span>`;
        i++;
        setTimeout(type, 100);
      } else {
        setTimeout(eraseWord, 2000);
      }
    }

    type();
  }

  function eraseWord() {
    let i = words[index].length;

    function erase() {
      const paragraph: any = document.getElementById("typing");

      if (i >= 0) {
        paragraph.innerHTML =
          staticText +
          `<span className="flex text-white-100 text-56 font-semibold">
        <span style="color:#ff4904"> ${words[index].substring(0, i)}|</span>
      </span>`;
        i--;
        setTimeout(erase, 100);
      } else {
        index = (index + 1) % words.length;
        setTimeout(typeWord, 1000);
      }
    }

    erase();
  }
  useEffect(() => {
    typeWord();
  }, []);
  return (
    <section className="flex flex-col tablet:flex-row py-50 laptop:mt-50">
      <div className="flex justify-center mb-40 tablet:hidden w-full">
        <img
          src={heroImage}
          width={226}
          alt="morvarid shafiei"
          title="morvarid shafiei"
        />
      </div>
      <div className="w-full tablet:w-4/6">
        <span className="text-white-100 text-30 tablet:text-40 laptop:text-56 font-semibold">
          سلام من <span className="text-orange-100">مروارید شفیعی</span> هستم
        </span>
        <span
          id="typing"
          className="content flex text-white-100 text-30 tablet:text-40 laptop:text-56 text-30 font-semibold"
        >
          برنامه نویس
        </span>

        <p className="text-gray-100 text-12 tablet:text-16 pt-8">
          با برخورداری از صفاتی همچون انعطاف‌پذیری در مواجهه با تغییرات، همکاری
          فعال در تیم و پیشرفت مداوم در مهارت‌های فنی و بهبود فرآیندهای کاری، یک
          فرد همواره آماده برای ایجاد تحول در پروژه‌ها هستم.
        </p>
        <div className="flex mt-70">
          <div className="flex items-center">
            <a href={"mailto: morvarid.shafiei96.gmail.com"} target="_blank">
              <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="envelop"
              />
            </a>
            <a
              href={
                "https://www.instagram.com/morvarid_shafiei?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
              }
              target="_blank"
            >
              <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="instagram"
                className="mx-10"
              />
            </a>
            <a
              href={
                "https://www.linkedin.com/in/morvarid-shafiei-6462641b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              target="_blank"
            >
              <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="linkedin2"
              />
            </a>
          </div>
          <Button
            label={"درباره من"}
            onClick={() => console.log("jj")}
            extraClasses={"mr-40"}
            to="about"
          />
        </div>
      </div>
      <div className="hidden tablet:flex w-2/6">
        <img
          src={heroImage}
          width={526}
          height={627}
          alt="morvarid shafiei"
          title="morvarid shafiei"
        />
      </div>
    </section>
  );
};
export default Hero;
