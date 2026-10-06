import React, { useState } from "react";
import Container from "../../components/common/Container";
import featuredimg from "../../assets/featuredImg.png";
import Images from "../../components/common/Images";
import background from "../../assets/destinationpath.png";
import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";

const Featured = ({ featuredData, tourData }) => {
  return (
    <>
      <section className="mt-37 mb-22.25 relative">
        <Images
          className="absolute top-[-20%] left-[47%] -translate-x-1/2 z-0"
          imgSrc={background}
        />
        <Container>
          {featuredData.map((item) => (
            <div key={item.id} className="flex gap-20.5 z-10">
              <div className="">
                <h3 className="font-mont font-normal text-[30px] text-[#000000] uppercase">
                  {item.label}
                </h3>
                <h2 className="max-w-139.5 font-mont font-bold text-[55px] text-[#036E8A] uppercase leading-none my-7.5">
                  {item.title}
                </h2>
                <p className="font-mont font-normal text-[20px] text-[#000000] w-120.25">
                  {item.description}
                </p>
              </div>
              <div className="">
                <Images imgSrc={item.image} imgAlt={item.imageAlt} />
              </div>
            </div>
          ))}

          <div className="">
            <div className="border-2 border-[#036E8A] rounded-[10px] pt-[57px] pb-[48px] px-[65px] mt-[70px] ">
              {tourData.map((item) => (
                <div key={item.id} className="">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="font-mont font-bold text-[30px] text-[#036E8A]">
                        {item.location}
                      </h3>
                      <div className="flex gap-2 mt-3.75">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`cursor-pointer text-[25px] ${
                              star <= item.rating
                                ? "text-orange-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaStar />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-1 h-21.25 bg-[#FF8000]"></div>
                    
                      {
                        <div className="">
                          <h5 className="font-mont font-normal text-[20px] text-black">Tour Price</h5>
                          <h2 className="font-mont font-bold text-[60px] text-[#036E8A] leading-none">{`$${item.price}`}</h2>
                        </div>
                      }
                     <Button className="pt-4 pb-[19px] pl-[48px] pr-[43px] bg-[#FF8000] rounded-[15px]">BOOK NOW</Button>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Featured;
