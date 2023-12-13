
import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Brands from "../Brands/Brands";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";


import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    const brands = useLoaderData();
    useEffect(() => {
        AOS.init();
      }, []);
   
    // console.log(brands);

    return (
        <div>
            <div>
                {
                    <Banner></Banner>
                }
            </div>
            <div className="flex flex-col items-center justify-center rounded-full text-center border border-black mx-2 py-5 mt-10" data-aos="flip-up" data-aos-anchor-placement="top-center" data-aos-duration="600">
            <svg className="h-[100px]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
            <h2 className="text-xl font-bold underline">"Your comfort is our satisfaction" <br />- Sportsshop</h2>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center px-5">
                    <h2 className="text-4xl font-bold my-8 lg:my-10" data-aos="flip-up" data-aos-anchor-placement="top-center" data-aos-duration="600">Popular Brands to choose from</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {
                        brands?.map((brand) => <Brands key={brand.id} brand={brand}></Brands>)
                    }
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="flex justify-center text-center text-4xl font-bold mb-8 lg:mb-10" data-aos="flip-up" data-aos-anchor-placement="top-center" data-aos-duration="600">Clients Testimonials</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 my-5">
                    {
                        brands?.map((brand) => <Testimonials key={brand.id} brand={brand}></Testimonials>)
                    }
                </div>
            </div>
            <div className="flex flex-col items-center my-10">
                <div>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};

export default Home;