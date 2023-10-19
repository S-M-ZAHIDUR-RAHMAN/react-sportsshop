import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const [details, setDetails] = useState();

    const { name } = useParams();
    const { brands, products } = useLoaderData();

    useEffect(() => {
        const findProductDetails = products?.find(product => product?.name === name);
        setDetails(findProductDetails);
    }, [name, products])
    console.log(details);

    return (
        <div>
            
        </div>
    );
};

export default Details;