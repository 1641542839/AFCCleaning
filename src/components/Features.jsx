import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { GiMagicBroom } from "react-icons/gi";
import { GiBroom } from "react-icons/gi";
import { LuSprayCan } from "react-icons/lu";
import { FaHouseUser } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiVacuumCleaner } from "react-icons/gi";
const FeaturesData = [
  {
    name: "One Off Cleaning",
    icon: (
      <GiMagicBroom className="text-5xl text-third-200 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "One-off cleaning is a deep, thorough clean for your property, perfect for post-event, special occasions or as specific needed.",
    aosDelay: "300",
  },
  {
    name: "Regular Cleaning",
    icon: (
      <GiBroom className="text-5xl text-third-200 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Our experienced and professional cleaners keep your property consistently clean and tidy, ideal for maintaining a fresh and healthy environment.",
    aosDelay: "500",
  },
  {
    name: "Carpet Cleaning",
    icon: (
      <GiVacuumCleaner className="text-5xl text-third-200 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Steam and Carpet Cleaning is a deep-cleaning service that revitalizes carpets, removing dirt and stains for a fresh and clean look.",
    aosDelay: "700",
  },
  {
    name: "End of Lease Cleans",
    icon: (
      <FaHouseUser className="text-5xl text-third-200 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "This kind of cleaning service ensuring your property is spotless and ready for the next tenant.We also offer a 100% Bond Back Guarantee.",
    aosDelay: "300",
  },
  {
    name: "Office Cleaning",
    icon: (
      <HiOutlineBuildingOffice2 className="text-5xl text-third-200 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "we offer the professional service aimed at maintaining a clean and productive workspace, promoting health and efficiency.",
    aosDelay: "500",
  },
  {
    name: "Disinfectant Cleaning",
    icon: (
      <LuSprayCan className="text-5xl text-third-200 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Disinfectant cleaning is a specialized service focused on eliminating germs and bacteria, ensuring a safe and hygienic space, like COVID-19",
    aosDelay: "700",
  }
];

const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Why Choose Us
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-third-200 to-accent-200 hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  href={`/cleaningService/${index}`}
                  className="inline-block text-lg font-semibold py-3 text-third-200 group-hover:text-black duration-300"
                >
                  Learn More
                </a> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
