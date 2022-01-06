import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Review.css"
import { Container } from 'react-bootstrap';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://thawing-dusk-24452.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);



    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container className='review'>
            <div className="my-5">
                <div className="my-5">
                    <p className="pt-5">What Our Happy Clients say about us</p>
                    <h2>OUR TESTIMONIAL</h2>
                </div>
                <Slider {...settings} className="container">
                    {
                        reviews.map(review => <div className="w-75  pb-4">

                            <div className="text-start  text-white  bg-dark opacity-75 py-5 ps-3">
                                <p >{review.reviewDesc}</p>

                                <ReactStars
                                    count={review.Rating}
                                    size={24}
                                    color="#ffd700"
                                />
                                <h6>from: {review.address}</h6>
                            </div>
                            <div className=' text-white'>

                                <h4>{review.name}</h4>
                            </div>

                        </div>)
                    }
                </Slider>
            </div>
        </Container>
    );
};

export default Review;