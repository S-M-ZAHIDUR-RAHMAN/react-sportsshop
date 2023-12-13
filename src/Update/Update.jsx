import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {
    const [update, setUpdate] = useState();

    const { name } = useParams();
    const { brands, products } = useLoaderData();
    console.log(products);

    useEffect(() => {
        const findProductToUpdate = products?.find(product => product?.name === name);
        setUpdate(findProductToUpdate);
    }, [name, products])
    console.log(update);

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const imageURL = form.imageURL.value;

        const updateProduct = { name, brandName, type, price, shortDescription, rating, imageURL };
        console.log(updateProduct);

        //update product data in the server
        fetch(`https://sportsshop-server-nt42wikqd-s-m-zahidur-rahmans-projects.vercel.app/product/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Product updated successfully!")
                }
            })

    }

    return (
        <div className="p-24 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold">Update Product: {update?.name}</h2>

            <form onSubmit={handleUpdateProduct}>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={update?.name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={update?.brandName} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={update?.type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={update?.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" defaultValue={update?.shortDescription} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={update?.rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageURL" defaultValue={update?.imageURL} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-block" />
            </form>

        </div>
    );
};

export default Update;