import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";



const Products = () => {

    const [adImages, setAdImages] = useState();


    const { id } = useParams();
    const { brands, products } = useLoaderData();
    // console.log(products);


    useEffect(() => {
        const findImages = brands?.find(brand => brand.id == id);
        setAdImages(findImages);
    }, [id, brands])

    let noAvailable = true;



    return (
        <div>
            <div className="carousel md:h-[90vh] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={adImages?.ad_image_one} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={adImages?.ad_image_two} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={adImages?.ad_image_three} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center font-bold text-white mt-5 text-4xl hero-overlay py-4">
                <h2>Available Products</h2>
            </div>
            <div className="grid grid-cols-1 mb-10 gap-4 lg:grid-cols-2 md:grid-cols-2">
                {
                    products && products.map(product=>{
                        if(product && product?.brandName === adImages?.brand_name){
                            noAvailable=false;
                            return <Product key={product?._id} product={product}></Product>
                        }
                        return null;
                    })
                }
                {noAvailable && 
                <div className="flex flex-row justify-center my-20 px-4">
                    <h2 className="text-3xl font-bold">No products available right now !!</h2>
                </div>
                }
                

            </div>
        </div>
    );
};

export default Products;