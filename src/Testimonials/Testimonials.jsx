/* eslint-disable react/prop-types */


import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = ({brand}) => {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div className="h-auto w-auto">
                <div className="flex flex-col mx-6 rounded-lg md:flex-row lg:flex-row" data-aos="slide-right" data-aos-anchor-placement="top-center"data-aos-duration="linear">
                    <img src={brand?.test_image} className=" rounded-lg shadow-2xl" />
                    <div className="flex flex-col gap-0 pl-5 pt-4">
                        <h2 className="text-bold text-2xl text-black">{brand?.name}</h2>
                        <p className="py-2 font-bold">{brand?.testimonial}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;