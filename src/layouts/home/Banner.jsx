import React from "react";
import backgroundImg from "../../assets/bannerImg.png";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

const Banner = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center bg-no-repeat pt-64.25 pb-50 relative z-0"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="text-left max-w-181 m-auto ">
          <h1 className="font-mont font-bold text-[89px] text-white leading-none mb-6">
            CHOOSE <br />
            THE PERFECT <br /> DESTINATIONS.
          </h1>
          <p className="font-mont font-normal text-[20px] text-white mb-11.25">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <form className="flex gap-3.75 items-center">
            <div className="pt-3.5 pb-3 pl-[23.57px] bg-white w-107.25 flex items-center gap-[25.14px] border-[#036E8A] border rounded-[10px]">
              <CiSearch className="text-[40px] text-[#036E8A]" />
              <input
                type="text"
                placeholder="Enter Your Location"
                className="font-mont font-normal text-[20px] text-[#036E8A] outline-none w-full"
              />
            </div>
            <div className="w-14.5 h-14.5 rounded-[50%] bg-[#FF8000] border border-white flex justify-center items-center">
              <FiMapPin className="text-white text-[35px]" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
