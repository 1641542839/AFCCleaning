import React from "react";
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: "We have been working with AFC Cleaning for the past two years and their cleaning services have been nothing short of exceptional. The team is professional, efficient, and always goes above and beyond to ensure our office space is spotless. ",
        img: "https://readymadeui.com/team-2.webp"
    },
    {
        id: 2,
        name: "Karolina Adair",
        text: "AFC Cleaning has been a game-changer for our community spaces. Their cleaning team is reliable, thorough, and respectful of our environment. They have consistently delivered high-quality services, leaving our spaces sparkling clean and fresh.",
        img: "https://readymadeui.com/team-3.webp"
    },
    {
        id: 3,
        name: "Simon Konecki",
        text: "As a property manager, I've worked with several cleaning companies, but AFC Cleaning stands out for their exceptional service. They are prompt, meticulous, and extremely professional. They have a proactive approach, often identifying and addressing potential issues before they become problems.",
        img: "https://readymadeui.com/team-4.webp"
    }
]

const Testimonials = () => {

    return (
        <div className="my-6 font-[sans-serif]">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-800">Testimonials</h2>
                <p className="text-sm text-gray-800 mt-4 leading-relaxed h1 font-bold">What our happy client say</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl max-md:gap-16 max-md:max-w-lg mx-auto mt-20">
            {TestimonialData.map((data)=>{
                        return <div data-aos="fade-up" className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative" key={data.id}>
                        <img src={data.img} className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-800 leading-relaxed">{data.text}</p>
                        </div>
    
                        <div className="flex justify-center space-x-1 mt-6">
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
    
                        <div className="mt-6 text-center">
                            <h4 className="text-sm whitespace-nowrap font-bold">{data.name}</h4>
                        </div>
                    </div>
                    })}
                                              
            </div>
        </div>
    )
}

export default Testimonials;