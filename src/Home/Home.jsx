
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
                    <h2 className="flex justify-center text-4xl font-bold mb-8 lg:mb-10" data-aos="flip-up" data-aos-anchor-placement="top-center" data-aos-duration="600">Clients Testimonials</h2>
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