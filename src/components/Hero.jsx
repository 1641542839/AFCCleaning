import React from "react";
import cleaner from "../assets/clean.jpg";
import banner from "../assets/banner.jpg";
import Container from "./Container";

// const ImageList = [
//   {
//     id: 1,
//     img: BiryaniImg1,
//   },
//   {
//     id: 2,
//     img: BiryaniImg2,
//   },
//   {
//     id: 3,
//     img: BiryaniImg3,
//   },
// ];

const Hero = () => {
  // const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className=" w-full relative flex flex-col" style={{ height: '70vh' }}>
      <img src={banner} alt="" className="absolute w-full h-full object-cover brightness-[0.6]" />
      <div
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true"
        className="max-w-screen-xl px-10 mx-auto w-full h-full lex-1 relative flex flex-col gap-4
        md:gap-10 justify-center text-white"
      >
        <h1 className="text-6xl font-bold text-primary-500">
          Comprehensive Cleaning Solutions
        </h1>
        <p className="text-xl max-w-xl text-primary-100">
          Our dedicated team of professionals specialises in a wide range of cleaning tasks, from residential deep cleans to commercial maintenance and everything in between
        </p>
        <div>
          <a className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" href="/aboutUs">
            About Us
          </a>
        </div>
      </div>
    </div>
  )
};

export default Hero;
