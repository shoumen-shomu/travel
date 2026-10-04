import React from "react";
import Container from "../../components/common/Container";
import featuredimg from "../../assets/featuredImg.png"

const Featured = ({data}) => {
    const {label,title,description,image,imageAlt} = data
  return (
    <>
      <section className="mt-37 mb-22.25">
        <Container>
          <div className="flex gap-20.5">
            <div className="">
              <h3 className="font-mont font-normal text-[30px] text-[#000000]">
              {label}
              </h3>
              <h2 className="max-w-139.5 font-mont font-bold text-[55px] text-[#036E8A] uppercase leading-none my-[30px]">
                {title}
              </h2>
              <p className="font-mont font-normal text-[20px] text-[#000000] w-120.25">
               {description}
              </p>
            </div>
            <div className="">
                <img src={image} alt={imageAlt} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Featured;
