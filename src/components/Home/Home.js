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

