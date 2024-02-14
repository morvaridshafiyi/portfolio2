"use client";

import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/style/selection.json";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section className="bg-black-200 py-50">
      <div className="flex flex-col items-center">
        <span className="text-orange-100 text-30 tablet:text-40 laptop:text-56 font-semibold">
          راه های ارتباطی <span className="text-white-100">با من</span>
        </span>
        <div className="my-24 bg-orange-100 h-[3px] relative w-[7.6rem] rounded-4 before:bg-black-200 before:w-[10px] before:absolute before:animate-heading-move before:top-0 before:h-full before:content-[''] before:left-0 after:bg-black-200 after:absolute after:w-[10px] after:animate-heading-move after:top-0 after:h-full after:content-[''] after:left-[21px]"></div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 pt-50">
        <div>
          <form>
            <div className="grid grid-cols-2 gap-x-40">
              <div className="group relative">
                <input
                  id="name"
                  className="text-white-100 w-full bg-black-200 border-b-2 rounded-normal border-white-100 px-04 py-03 transition-all ease-in outline-0 focus-within:border-gray-100"
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  className={`absolute z-10 bg-black-200 px-01 transition-all ease-in group-focus-within:text-12 group-focus-within:-top-[35px] group-focus-within:text-gray-100 right-0 ${
                    name.length > 0
                      ? "-top-[35px] text-12 text-gray-100"
                      : "-top-[13px] text-16 text-white-100"
                  }`}
                  htmlFor="name"
                >
                  نام
                </label>
              </div>
              <div className="group relative">
                <input
                  id="email"
                  className="text-white-100 w-full bg-black-200 border-b-2 rounded-normal border-white-100 px-04 py-03 transition-all ease-in outline-0 focus-within:border-gray-100"
                  type="text"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className={`absolute z-10 bg-black-200 px-01 transition-all ease-in group-focus-within:text-12 group-focus-within:-top-[35px] group-focus-within:text-gray-100 right-0 ${
                    email.length > 0
                      ? "-top-[35px] text-12 text-gray-100"
                      : "-top-[13px] text-16 text-white-100"
                  }`}
                  htmlFor="email"
                >
                  ایمیل
                </label>
              </div>
            </div>
            <div className="group relative mt-40">
              <textarea
                id="message"
                className="text-white-100 w-full bg-black-200 border-b-2 rounded-normal border-white-100 px-04 py-03 transition-all ease-in outline-0 focus-within:border-gray-100"
                autoComplete="off"
                value={message}
                rows={7}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label
                className={`absolute z-10 bg-black-200 px-01 transition-all ease-in group-focus-within:text-12 group-focus-within:-top-[25px] group-focus-within:text-gray-100 right-0 ${
                  message.length > 0
                    ? "-top-[25px] text-12 text-gray-100"
                    : "top-[130px] text-16 text-white-100"
                }`}
                htmlFor="message"
              >
                پیام
              </label>
            </div>
          </form>
        </div>
        <div className="pt-50 tablet:pt-0">
          <div className="flex items-center mb-24 grid grid-cols-2">
            <div className="flex flex-col text-left">
              <span className="text-22 text-white-100 mb-12 font-semibold">
                Address
              </span>
              <span className="text-16 text-gray-100">Iran, Tehran</span>
            </div>
            <div className="bg-orange-100 flex items-center justify-center w-[70px] h-[70px] rounded-full mr-24">
              {/* <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="location"
              /> */}
              <i className="asc asc-location text-white-100 text-30"></i>
            </div>
          </div>
          <div className="flex items-center mb-24 grid grid-cols-2">
            <div className="flex flex-col text-left">
              <span className="text-22 text-white-100 mb-12 font-semibold">
                Email
              </span>
              <span className="text-16 text-gray-100">
              morvarid.shafiei96.gmail.com
              </span>
            </div>
            <div className="bg-orange-100 flex items-center justify-center w-[70px] h-[70px] rounded-full mr-24">
              <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="envelop"
              />
            </div>
          </div>
          <div className="flex items-center mb-24 grid grid-cols-2">
            <div className="flex flex-col text-left">
              <span className="text-22 text-white-100 mb-12 font-semibold">
                Phone
              </span>
              <span className="text-16 text-gray-100">9129792167 98+</span>
            </div>
            <div className="bg-orange-100 flex items-center justify-center w-[70px] h-[70px] rounded-full mr-24">
              <IcomoonReact
                iconSet={iconSet}
                color="#fff"
                size={20}
                icon="phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
