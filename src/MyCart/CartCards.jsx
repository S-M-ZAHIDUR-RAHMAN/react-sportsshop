/* eslint-disable react/prop-types */


const CartCards = ({cartProduct}) => {
    const {
        imageURL,
        name,
        brandName,
        type,
        price,
        rating
    } = cartProduct
    return (
        <div className="card lg:mx-10 md:mx-10 mx-5 my-5 lg:card-side bg-base-100 shadow-xl">
        <figure><img src={imageURL} alt="Album" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Brand Name: {brandName}</p>
            <p>Type: {type}</p>
            <p>Price: {price} TK</p>
            <p>Rating: {rating}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-accent">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default CartCards;