import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import ExploreCar from '../ExploreCar/ExploreCar';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const url = "https://thawing-dusk-24452.herokuapp.com/cars";
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
            .finally(() => setIsLoading(false))
    }, [])
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <>
                <Navigation></Navigation>
                <Container>
                    <div className="text-start mt-5">
                        <h2 >Available Cars</h2>
                        <hr className='w-25' />
                    </div>
                    <Row >
                        {
                            cars.map(car => <ExploreCar key={car._id} car={car}></ExploreCar>)
                        }
                    </Row>
                </Container>
                <Footer></Footer>
            </>
        );
    }
};

export default ExploreCars;