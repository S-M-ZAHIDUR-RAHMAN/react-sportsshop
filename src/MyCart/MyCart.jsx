import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const MyCart = () => {


    const cartProducts = useLoaderData();
    const [products, setProducts] = useState(cartProducts);


    //These will be used to get the exact users cart info. will have to replace above two lines of code and do some change in the bellow codes.
    // const {user} = useContext(AuthContext);
    // const {displayName} = user;
   
    // const cartProducts = useLoaderData();
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const findMyCart = cartProducts?.find(product => product?.displayName === displayName);
    //     setProducts(findMyCart || []);
    // }, [displayName, cartProducts])
    // console.log(products);

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