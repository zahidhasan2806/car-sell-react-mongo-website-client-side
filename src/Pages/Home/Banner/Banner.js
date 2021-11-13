import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import slider1 from "../../../Images/slider02.jpg"
import slider2 from "../../../Images/slider03.jpg"
import slider3 from "../../../Images/slider01.jpg"
import './Banner.css'
import { Link } from 'react-router-dom';



const Banner = () => {

    return (
        <Carousel className="bg-dark banner ">
            <Carousel.Item>
                <img
                    className=" w-100"
                    src={slider1}
                    style={{ height: "100vh", opacity: 0.5 }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="fs-1 fw-bold my-5">My Car, My Choice</h3>
                    <p className="pb-5 fs-5 my-5 ">	Let's Enjoy Life On Full Speed Now</p>
                    <Link to="/explore">
                        <Button variant="dark">Explore Our Car</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100"
                    src={slider2}
                    style={{ height: "100vh", opacity: 0.5 }}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="fs-1 fw-bold my-5">Getting Your Car on the road</h3>
                    <p className="pb-5 fs-5 my-5 ">	Operated Locally, Excelled Globally.</p>
                    <Link to="/explore">
                        <Button variant="dark">Explore Our Car</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={slider3}
                    style={{ height: "100vh", opacity: 0.5 }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="fs-1 fw-bold my-5">We keep your life Running</h3>
                    <p className="pb-5 fs-5 my-5 ">	Putting you on the road of reliability.</p>
                    <Link to="/explore">
                        <Button variant="dark">Explore Our Car</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;