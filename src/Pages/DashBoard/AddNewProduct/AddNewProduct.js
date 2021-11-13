import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://thawing-dusk-24452.herokuapp.com/cars', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data)
    };
    return (
        <Container className="  my-5 ">
            <h4>Add New Product </h4>.
            <form className="p-5 text-center border rounded mx-auto w-50" onSubmit={handleSubmit(onSubmit)}>

                <input className="m-3 w-75 px-4 py-2" {...register("name", { required: true })} placeholder="Car Name" />
                {errors.name && <span>This field is required</span>}
                <input className="m-3 w-75 px-4 py-2" {...register("img", { required: true })} placeholder="Car Image URL" />
                {errors.img && <span>This field is required</span>}


                <textarea className="m-3 w-75 px-4 py-2" {...register("description", { required: true })} placeholder="Description" />
                {/* errors will return when field validation fails  */}
                {errors.description && <span>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("price", { required: true })} type="number" placeholder="Package Price" />
                {errors.price && <span>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("Category", { required: true })} placeholder="Category" />
                {errors.Category && <span>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" type="submit" value="Add Product" />
            </form>
        </Container>
    );
};

export default AddNewProduct;