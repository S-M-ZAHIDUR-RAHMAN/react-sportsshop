import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Products = () => {

    const [adImages, setAdImages] = useState();

    const { id } = useParams();
    const brands = useLoaderData();


    useEffect(() => {
        const findImages = brands?.find(brand => brand.id == id);
        setAdImages(findImages);
    }, [id, brands])


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
                    <img src={adImages?.ad_image_two}className="w-full" />
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
            <div>
                
            </div>
        </div>
    );
};

export default Products;