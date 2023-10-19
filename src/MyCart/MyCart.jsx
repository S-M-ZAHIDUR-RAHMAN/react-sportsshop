import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";


const MyCart = () => {

    const cartProducts = useLoaderData();

    return (
        <div className="flex flex-col gap-4 pt-10">
            {
                cartProducts && cartProducts?.map(cartProduct=><CartCards key={cartProduct._id} cartProduct={cartProduct}></CartCards>)
            }
        </div>
    );
};

export default MyCart;