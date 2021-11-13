import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth.js'

const Reviews = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { user } = useAuth()

    const onSubmit = data => {

        axios.post('https://thawing-dusk-24452.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="mt-5">
                <h2 className="text-dark pt-5 text-uppercase">Add Review</h2>
                <div className="d-flex justify-content-center ">
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className=" m-2 w-50 px-4 py-2" value={user.displayName} {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Address"{...register("address", { required: true })} />

                        <textarea className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                        <br />

                        {/* <input
                            type="number"
                            placeholder="Rating(1-5)"
                            className="m-2 w-50 px-4 py-2"
                            {...register('Rating', {
                                max: { value: 5 }
                            })}
                        /> */}
                        <select {...register("Rating")} className='w-50'>
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>


                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add Review" />

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Reviews;