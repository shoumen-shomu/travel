import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../common/Button";
const PackageData = ({ }) => {
  return (
    <div className="">
      <div className="pt-9.25 px-9.25 pb-19 border-[1.5px] border-[#036E8A] rounded-2xl relative w-[357px] bg-white">
        <h2 className="font-mont font-bold text-[40px] text-[#036E8A]">
          STARTER
        </h2>
        <h3 className="font-mont font-bold text-[60px] text-[#036E8A]">$9</h3>
        <p className="font-mont font-normal text-[25px] text-[#036E8A]">
          Per Month
        </p>
        <div className="mt-10">
          <ul className="grid gap-5">
            <li className="flex gap-[14px] items-center">
              <FaCircleCheck className="text-[#036E8A] text-[20px]" />
              <p className="font-mont font-normal text-[18px] text-[#000000]">International Air Ticket.</p>
            </li>
            <li className="flex gap-[14px] items-center">
              <FaCircleCheck className="text-[#036E8A] text-[20px]" />
              <p className="font-mont font-normal text-[18px] text-[#000000]">International Air Ticket.</p>
            </li>
            <li className="flex gap-[14px] items-center">
              <FaCircleCheck className="text-[#036E8A] text-[20px]" />
              <p className="font-mont font-normal text-[18px] text-[#000000]">International Air Ticket.</p>
            </li>
            <li className="flex gap-[14px] items-center">
              <FaCircleCheck className="text-[#036E8A] text-[20px]" />
              <p className="font-mont font-normal text-[18px] text-[#000000]">International Air Ticket.</p>
            </li>
          </ul>
        </div>
        <Button className={"pt-3 pb-4 pr-7 pl-6.5 bg-[#036E8A] rounded-2xl absolute -bottom-8.75 left-1/2 translate-x-[-50%] w-max "} btnText={"GET STARTED"}/>
      </div>
      <p className="mt-[42px] text-center font-mont font-normal text-[20px] text-black">4 Days Trial Available</p>
    </div>
  );
};

export default PackageData;
