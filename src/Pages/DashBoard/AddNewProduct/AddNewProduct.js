import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/cars', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data)
    };
    return (
        <Container className="  my-5">
            <form className="pt-3 pb-5 text-center " onSubmit={handleSubmit(onSubmit)}>

                <input className="m-3 w-50 px-4 py-2" {...register("name", { required: true })} placeholder="Car Name" />
                {errors.name && <span>This field is required</span>}
                <input className="m-3 w-50 px-4 py-2" {...register("img", { required: true })} placeholder="Car Image URL" />
                {errors.img && <span>This field is required</span>}


                <textarea className="m-3 w-50 px-4 py-2" {...register("description", { required: true })} placeholder="Description" />
                {/* errors will return when field validation fails  */}
                {errors.description && <span>This field is required</span>}

                <input className="m-3 w-50 px-4 py-2" {...register("price", { required: true })} type="number" placeholder="Package Price" />
                {errors.price && <span>This field is required</span>}

                <input className="m-3 w-50 px-4 py-2" {...register("Category", { required: true })} placeholder="Category" />
                {errors.Category && <span>This field is required</span>}

                <input className="m-3 w-50 px-4 py-2" type="submit" />
            </form>
        </Container>
    );
};

export default AddNewProduct;