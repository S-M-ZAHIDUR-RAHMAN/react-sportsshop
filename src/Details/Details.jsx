import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";





const Details = () => {

    const {user} = useContext(AuthContext);
    const{displayName} = user;
    console.log(user.displayName);
   

    const [productDetails, setProductDetails] = useState();

    const { name } = useParams();
    const { brands, products } = useLoaderData();

    useEffect(() => {
        const findProductDetails = products?.find(product => product?.name === name);
        setProductDetails(findProductDetails);
    }, [name, products])
    console.log(productDetails);

    const detailsImageStyle = {
        backgroundImage: `url(${productDetails?.imageURL})`
    }
    const details = {...productDetails, displayName};
    console.log(details);

    const handleCart = () =>{
        //add product to cart in DB
        fetch('https://sportsshop-server-nt42wikqd-s-m-zahidur-rahmans-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Product added to cart successfully!")
                }
            })
    }

    return (
        <div className="flex flex-col pl-5 pr-5 pb-5">
            <div className="hero min-h-[70vh] flex flex-col rounded-md justify-end" style={detailsImageStyle}>
                <div className="w-full bg-opacity-60">
                    <div className="hero-overlay text-white animate-bounce text-3xl font-bold underline pl-5 py-5">
                        {details?.name}
                    </div>
                </div>
            </div>
            <div className="mt-14 px-4 lg:px-0">
                <div className="flex flex-col gap-5 lg:px-10 md:px-4 px-2">
                    <p>Brand Name: {details?.brandName}</p>
                    <p>Type of Product: {details?.type}</p>
                    <p>Price of the product: {details?.price}</p>
                    <p>Customer rating: {details?.rating}</p>
                    <p>{details?.shortDescription}</p>
                </div>
                <div className="flex flex-row justify-center gap-5">
                        <div onClick={handleCart} className="flex justify-center mt-5">
                            <button className="btn accent">Add to Cart</button>
                        </div>
                    <Link to={`/`}>
                        <div className="flex justify-center mt-5">
                            <button className="btn accent">Go Back to <br />HOME</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Details;