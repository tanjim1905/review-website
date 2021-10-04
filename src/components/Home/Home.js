import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Courses/Course/Course';
import Header from '../Header/Header';

const Home = () => {
    const [homeCourse, setHomeCourse] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setHomeCourse(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    <h2 className="text-center">Our Courses</h2>

                    <p className="text-center">we know that not only innovative technologies determine the quality of the product. A very important aspect in the production process is the contribution of our employees.</p>
                </div>
            </Row>
                <Row xs={1} md={2} lg={4} className="g-4 my-5">
                {
                    homeCourse.slice(0, 4).map((course) => <Course key={course.key} course={course}></Course>)
                }
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;

