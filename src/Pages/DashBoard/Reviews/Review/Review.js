import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Card, Carousel } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);




    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                {
                    reviews.map(review =>
                        <div class="carousel-item active">





                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>
                                        {review.reviewDesc}
                                    </Card.Text>
                                    <Card.Text>
                                        <ReactStars
                                            count={review.Rating}
                                            size={24}
                                            color="#ffd700"
                                        />
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>

                            {/* <div className="card-body">
                                <h2>{review.name}</h2>
                                <h5>{review.address}</h5>
                                <p> {review.reviewDesc}</p>

                                <ReactStars
                                    count={review.Rating}
                                    size={24}
                                    color="#ffd700"
                                />
                            </div> */}
                        </div>
                    )
                }

            </div>

        </div >
    );
};

export default Review;