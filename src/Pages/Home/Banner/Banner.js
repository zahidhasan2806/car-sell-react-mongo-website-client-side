import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const Banner = () => {
    const data = [
        {
            image: "https://i.ibb.co/zQGvkDM/haval.jpg",
            caption: "Audi"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Range Rover"
        },
        {
            image: "https://i.ibb.co/1d8Zk7W/Mitsubishi-Expander-Front.jpg",
            caption: "Mitsubishi"
        },
        {
            image: "https://i.ibb.co/Fsm27dh/tucson-exterior-right-front-three-quarter.webp",
            caption: "Hyundai"
        },
        {
            image: "https://i.ibb.co/qyk8Jcx/mercedes-benz-glc-class-my21-index-1.png",
            caption: "Merecedes-Benz"
        },
        {
            image: "https://i.ibb.co/tqfZxxx/Civic-1-5-RS-Turbo.jpg",
            caption: "Honda"
        },
        {
            image: "https://i.ibb.co/FHs7KJc/bmw-2-series.webp",
            caption: "BMW"
        },
        {
            image: "https://i.ibb.co/zQGvkDM/haval.jpg",
            caption: "Haval"
        },
        {
            image: "https://i.ibb.co/NjcKcVJ/Suzuki-Swift-Fire-Red-Price-in-BD.png",
            caption: "Suzuki"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                {/* <h2>React Carousel Minimal</h2>
                <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
                <div style={{
                    // padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100vw"
                        captionStyle={captionStyle}
                        // radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxHeight: "500px",
                        }}
                    />
                </div>
            </div>
        </div>


    );
};

export default Banner;