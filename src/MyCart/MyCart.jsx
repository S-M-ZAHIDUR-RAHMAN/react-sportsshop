import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";
import { useState } from "react";


const MyCart = () => {

    const cartProducts = useLoaderData();
    const [products, setProducts] = useState(cartProducts)

    return (
        <div className="flex flex-col gap-4 pt-10">
            {
                products && products?.map(cartProduct=><CartCards key={cartProduct._id} cartProduct={cartProduct} products={products} setProducts={setProducts}></CartCards>)
            }
        </div>
    );
};

export default MyCart;