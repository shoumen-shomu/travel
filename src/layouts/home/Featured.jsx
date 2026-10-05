import React from "react";
import Container from "../../components/common/Container";
import featuredimg from "../../assets/featuredImg.png"
import Images from "../../components/common/Images";
import background from "../../assets/destinationpath.png"

const Featured = ({data}) => {
  return (
    <>
      <section className="mt-37 mb-22.25 relative">
        <Images className="absolute top-[-20%] left-[47%] -translate-x-1/2 z-0" imgSrc={background}/>
        <Container>
          {
            data.map((item)=>(
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
            ))
          }
        </Container>
      </section>
    </>
  );
};

export default Featured;
