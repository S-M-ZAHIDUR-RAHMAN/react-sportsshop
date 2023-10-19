
import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Brands from "../Brands/Brands";
const Home = () => {
    const brands = useLoaderData();
   
    // console.log(brands);

    return (
        <div>
            <div>
                {
                    <Banner></Banner>
                }
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="flex justify-center text-4xl text-white font-bold my-8 lg:my-10" data-aos="flip-up" data-aos-anchor-placement="top-center" data-aos-duration="600">Popular Brands to choose from</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {
                        brands?.map((brand) => <Brands key={brand.id} brand={brand}></Brands>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;