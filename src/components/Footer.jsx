import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
    return (
        <div data-aos="fade-up" className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide">
            <div className="py-12 px-12">
                <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
                    <div>
                        <a href="#"><img src={Logo} alt="logo" className='w-44 ' /></a>
                    </div>

                    <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
                        <li><a href="/" className="text-gray-300 hover:underline text-base">Home</a></li>
                        <li><a href="/aboutUs" className="text-gray-300 hover:underline text-base">About</a></li>
                        <li><a href="/contactUs" className="text-gray-300 hover:underline text-base">Contact</a></li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-500" />

                <p className='text-center text-gray-300 text-base'>Copyright © 2024<a href='#'
                    className="hover:underline mx-1">AFC Cleaning</a>All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer