import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useStars } from "stars-rating-react-hooks";

import useAuth from '../../../../Hooks/useAuth.js'
import Swal from 'sweetalert2';

const Reviews = () => {

    const { register, handleSubmit, setValue, reset } = useForm();
    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: "★",
        renderEmpty: "☆"
    };
    const { stars, getStarProps, getStarWrapperProps } = useStars(config);

    const { user } = useAuth()

    const onSubmit = data => {

        axios.post('https://thawing-dusk-24452.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire("Review Added successfully");
                    reset();
                }
            })
    };


    return (
        <div>
            <div className="mt-5">
                <h2 className="text-dark pt-5 text-uppercase">Add Review</h2>
                <div className="d-flex justify-content-center ">
                    <form className="pt-3 pb-5 shadow" onSubmit={handleSubmit(onSubmit)}>
                        <p className='d-block m-auto'
                            {...getStarWrapperProps({
                                style: {
                                    cursor: "pointer"
                                }
                            })}
                        >
                            {stars?.map((star, i) => (
                                <span
                                    key={i}
                                    {...getStarProps(i, {
                                        style: {
                                            fontSize: "40px",
                                            color: "gold"
                                        },
                                        onClick: (event, ratedValue) => {
                                            setValue("rating", ratedValue, {
                                                shouldValidate: true,
                                                shouldDirty: true
                                            })
                                        }
                                    })}
                                >
                                    {star}
                                </span>
                            ))}
                        </p>
                        <input className=" m-2 w-50 px-4 py-2" value={user.displayName} {...register("name", { required: true })} />

                        <input className="m-2 w-50 px-4 py-2" placeholder="Provide your Image Link"{...register("image", { required: true })} />
                        <input className="m-2 w-50 px-4 py-2" placeholder="Address"{...register("address", { required: true })} />

                        <textarea className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("reviewDesc", { required: true })} />
                        <br />
                        < input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" value="Add Review" />

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Reviews;