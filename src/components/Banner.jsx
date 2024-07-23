import React from "react";
import Container from "./Container";
import Image from "../assets/clean.jpg"


const QUALITIES = [
    {
        title: "25",
        description: "Years of successful experience ",
        aosDelay: "300",
    },
    {
        title: "200+",
        description: "Dedicated team members",
        aosDelay: "300",
    },
    {
        title: "3000+ ",
        description: "Served clients Melbourne",
        aosDelay: "300",
    },
    {
        title: "100%",
        description: "100% positive feedback",
        aosDelay: "300",
    }
];


const Banner = () => {
    return (
        <div className="bg-slate-50 py-32" >
            <Container>
                <div className="w-full flex flex-col lg:flex-row gap-20">
                    <div className="flex flex-col flex-1 gap-10">
                        <div className="text-4xl text-third-500 font-semibold" data-aos="fade-up">
                            Our cleaning company is committed to delivering top-notch services
                        </div>
                        <div className="text-third-100 text-xl" data-aos="fade-up">
                            ensuring every customer enjoys a spotless and refreshing environment
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            {
                                QUALITIES.map((quality, i) => (
                                    <div key={i} className="w-full flex flex-col gap-6" data-aos="fade-up"
                                        data-aos-delay={quality.aosDelay}>
                                        <span className="text-4xl font-semibold text-accent-500">{quality.title}</span>
                                        <span className="text-third-100 text-xl">{quality.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex-1 aspect-[4/2] lg:aspect-[unset] overflow-hidden rounded-md relative group" data-aos="fade-up">
                        <img src={Image} alt="" className="w-full h-full object-cover object-center absolute top-0 left-0 group-hover:scale-105 transition-all duration-300" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner;