/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Brands = ({ brand }) => {

    const { id, brand_name, brand_image } = brand;


    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <Link to={`/brands/${id}`}>
            <div className="card w-72 shadow-lg hover:opacity-80 glass" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="600">
                <figure><img src={brand_image} alt="" /></figure>
                <div className="card-body flex flex-row justify-center">
                    <h2 className="card-title text-2xl font-bold">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brands;