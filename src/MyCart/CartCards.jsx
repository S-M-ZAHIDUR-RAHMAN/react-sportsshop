/* eslint-disable react/prop-types */


import swal from "sweetalert";


const CartCards = ({ cartProduct, products, setProducts }) => {
    const {
        imageURL,
        name,
        brandName,
        type,
        price,
        rating,
        _id
    } = cartProduct

    
    const handleDelete = id => {
        // console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log('delete confirmed');
                    fetch(`https://sportsshop-server-nt42wikqd-s-m-zahidur-rahmans-projects.vercel.app/cart/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Your product has been deleted!", {
                                    icon: "success",
                                });
                                //remove the product from the UI
                                const remainingProducts = products?.filter(product => product?._id !== id);
                                setProducts(remainingProducts);

                            }
                        })
                }
            });
    }
    return (
        <div className="card lg:mx-10 md:mx-10 mx-5 my-5 lg:card-side md:card-side bg-base-100 shadow-xl">
            <figure><img src={imageURL} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand Name: {brandName}</p>
                <p>Type: {type}</p>
                <p>Price: {price} TK</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartCards;