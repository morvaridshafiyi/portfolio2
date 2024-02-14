import { MouseEventHandler } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

interface iProps {
  label: string;
  extraClasses?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  to: string;
}
const Button = ({ label, onClick, extraClasses, to }: iProps) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={700}
      key={label}
    >
      <div
        className={`group bg-orange-100 text-14 tablet:text-16 rounded-4 cursor-pointer px-40 py-12 overflow-hidden relative hover:shadow-[0_35px_60px_-15px_rgba(255,73,4)] hover:-rotate-[8deg] transition duration-[0.8s] ${extraClasses}`}
        onClick={onClick}
      >
        <em className="group-hover:-rotate-[8deg] group-hover:-translate-y-[81%] absolute w-[12em] h-[6em] bg-white-100 -left-[7px] top-[3.8em] transition-all duration-[0.8s] ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] delay-0">
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
          <i className="float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-white-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100"></i>
        </em>
        <span className="relative block transition text-white-100 font-semibold group-hover:text-orange-100">
          {label}
        </span>
      </div>
    </Link>
  );
};
export default Button;
