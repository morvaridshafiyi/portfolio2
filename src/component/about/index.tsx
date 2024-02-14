"use client";

import Button from "../button";
import aboutImage from "../../assets/image/about.png";

const About = () => {
  return (
    <section className="bg-black-200 py-50">
      <div className="flex flex-col items-center">
        <span className="text-white-100 text-30 tablet:text-40 laptop:text-56 font-semibold">
          درباره <span className="text-orange-100">من</span>
        </span>
        <div className="my-24 bg-orange-100 h-[3px] relative w-[7.6rem] rounded-4 before:bg-black-200 before:w-[10px] before:absolute before:animate-heading-move before:top-0 before:h-full before:content-[''] before:left-0 after:bg-black-200 after:absolute after:w-[10px] after:animate-heading-move after:top-0 after:h-full after:content-[''] after:left-[21px]"></div>
      </div>
      <div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-40">
          <div className="tablet:flex tablet:justify-center">
            <div className="relative w-[90%] tablet:w-fit h-fit before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:border-8 before:border-orange-100 before:-translate-x-[26px] before:translate-y-[26px]">
              <img width={526} src={aboutImage} className="relative z-10" alt="morvarid shafiei" title="morvarid shafiei"/>
            </div>
          </div>
          <div className="pt-50 tablet:pt-0">
            <span className="flex text-gray-100 text-18 tablet:text-24 font-semibold pb-16 tablet:pb-24">
              مشخصات فردی
            </span>
            <div className="flex">
              <div className="grid grid-cols-1 tablet:grid-cols-2">
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  نام:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    مروارید شفیعی
                  </span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  مدرک تحصیلی:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    کارشناسی فناوری اطلاعات
                  </span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  تاریخ تولد:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    2 آبان 1375
                  </span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  کشور محل سکونت:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    ایران
                  </span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  سابقه:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    4 سال
                  </span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  فریلنسری:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">فعال</span>
                </span>
                <span className="text-14 tablet:text-16 text-gray-100 pb-16 tablet:pb-24">
                  شماره تماس:
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                  {" "}9129792167 98+
                  </span>
                </span>
                <span className="text-gray-100 pb-16 tablet:pb-24">
                  ایمیل:{" "}
                  <span className="font-semibold text-gray-200 pr-2 tablet:pr-10">
                    morvarid.shafiei96.gmail.com
                  </span>
                </span>
              </div>
            </div>
            <div className="w-fit pt-24">
              <Button
                label={"استخدام"}
                onClick={() => console.log("jj")}
                to="contact"
              />
              ّ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
