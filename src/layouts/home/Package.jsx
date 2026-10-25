import React from "react";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import PackageData from "../../components/data/PackageData";

const Package = () => {
  return (
    <>
      <section className="mt-22.25 mb-28.75">
        <Container>
        <div className="heading text-center">
              <h2 className="font-mont font-bold text-[60px] text-[#036E8A] mb-[23px]">Special Package</h2>
          <p className="w-207.25 font-mont font-normal text-[20px] text-black mx-auto ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div className="flex gap-10 justify-between mt-22.75">
          <PackageData/>
          <PackageData/>
          <PackageData/>
        </div>
        </Container>
      </section>
    </>
  );
};

export default Package;
