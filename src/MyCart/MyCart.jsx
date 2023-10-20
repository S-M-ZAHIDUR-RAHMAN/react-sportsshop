import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";
import { useState } from "react";


const MyCart = () => {

    const cartProducts = useLoaderData();
    const [products, setProducts] = useState(cartProducts)

    return (

        <div>
            <div className="flex flex-row justify-center mt-10 text-4xl text-white font-bold hero-overlay py-4">
                <h2>My Cart</h2>
            </div>
            <div className="flex flex-col mt-10 gap-4 pt-10">
                {
                    products && products?.map(cartProduct => <CartCards key={cartProduct._id} cartProduct={cartProduct} products={products} setProducts={setProducts}></CartCards>)
                }
            </div>
        </div>
    );
};

export default MyCart;