import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const fileInput = React.createRef();
const AddNewProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {


        let image = fileInput.current.files[0]
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('image', image)


        fetch('http://localhost:5000/cars', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // fetch('https://thawing-dusk-24452.herokuapp.com/cars', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => console.log(result))
        // console.log(data)
    };
    return (
        <Container className="  my-5 ">
            <h4>Add New Product </h4>.
            <form className="p-5 text-center border rounded mx-auto w-50" onSubmit={handleSubmit(onSubmit)}>

                <input className="m-3 w-75 px-4 py-2" {...register("name", { required: true })} placeholder="Car Name" />
                <br />
                {errors.name && <span className='text-danger'>This field is required</span>}
                <textarea className="m-3 w-75 px-4 py-2" {...register("description", { required: true })} placeholder="Description" />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.description && <span className='text-danger'>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("price", { required: true })} type="number" placeholder="Package Price" />          <br />
                {errors.price && <span className='text-danger'>This field is required</span>}

                <input className="m-3 w-75 px-4 py-2" {...register("Category", { required: true })} placeholder="Category" />          <br />
                {errors.Category && <span className='text-danger'>This field is required</span>}

                <input type='file' accept='image/*' className="m-3 w-75 px-4 py-2" ref={fileInput} />



                <input className="m-3 w-75 px-4 py-2" type="submit" value="Add Product" />
            </form>
        </Container>
    );
};

export default AddNewProduct;