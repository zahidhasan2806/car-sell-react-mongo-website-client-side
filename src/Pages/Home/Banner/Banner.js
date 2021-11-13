import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../../Images/slider02.jpg"
import slider2 from "../../../Images/slider03.jpg"
import slider3 from "../../../Images/slider01.jpg"
import './Banner.css'



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
                    <h3 className="my-5">First slide label</h3>
                    <p className="pb-5 my-5 ">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                    <h3 className="my-5">Second slide label</h3>
                    <p className="pb-5 my-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="im-fluid w-100"
                    src={slider3}
                    style={{ height: "100vh", opacity: 0.5 }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="my-5">Third slide label</h3>
                    <p className="pb-5 my-5 ">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;