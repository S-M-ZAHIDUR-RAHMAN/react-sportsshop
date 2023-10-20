import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */



const Product = ({ product }) => {
    const {
        imageURL,
        name,
        brandName,
        type,
        price,
        rating
    } = product
    // console.log(_id);


    return (
        <div>
            <div className="flex flex-col lg:mt-10 items-center">
                <div className="card mt-6 w-68 h-100 shadow-lg hover:opacity-80 glass" data-aos="slide-up" data-aos-anchor-placement="top-center" data-aos-duration="linear">
                    <figure className="h-full"><img src={`${imageURL}`} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{brandName}</p>
                        <p>Type: {type}</p>
                        <p>Price: {price} Tk</p>
                        <p>Rating: {rating}</p>
                        <div className="flex flex-row justify-between mt-4">
                        <Link to={`/details/${name}`}><button className="btn btn-accent">Details</button></Link>
                           
                        <Link to={`/update/${name}`}><button className="btn btn-accent">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Product;