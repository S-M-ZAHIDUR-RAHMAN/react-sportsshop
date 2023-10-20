/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Brands = ({ brand }) => {

    const { id, brand_name, brand_image } = brand;

    return (
        <Link to={`/brands/${id}`}>
            <div className="card w-72 shadow-lg hover:opacity-80 glass" data-aos="fade-up-right" data-aos-anchor-placement="top-center" data-aos-duration="600">
                <figure><img src={brand_image} alt="" /></figure>
                <div className="card-body flex flex-row justify-center">
                    <h2 className="card-title text-2xl font-bold">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brands;