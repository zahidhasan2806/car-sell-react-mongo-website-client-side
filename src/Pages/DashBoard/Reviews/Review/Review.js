import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Review.css"
import { Card, Button, Container } from 'react-bootstrap';
const Review = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://thawing-dusk-24452.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Container className="my-5">
            <div className="text-start">
                <h4 >What People Says....</h4>
            </div>
            <Slider {...settings} className="border bg-dark opacity-50">
                {
                    reviews.map(review => <div key={review._id} className="w-50 mx-auto row">
                        <div className='col-md-6 text-white'>

                            <h4>{review.name}</h4>
                        </div>
                        <div className="text-start  text-white col-md-6">
                            <p >{review.reviewDesc}</p>
                            <h6>from: {review.address}</h6>
                            <ReactStars
                                count={review.Rating}
                                size={24}
                                color="#ffd700"
                            />
                        </div>

                    </div>)
                }
            </Slider>
        </Container>
    );
};

export default Review;