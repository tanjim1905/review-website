import React, { useEffect, useState } from 'react';
import Course from './Course/Course';

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    return (
        <div className="container mt-4">
            <h2 className="text-center">Our Courses</h2>

            <p className="text-center">we know that not only innovative technologies determine the quality of the product. A very important aspect in the production process is the contribution of our employees. Nowadays Technologies is constantly investing in the development of its employees. The company organizes courses, seminars and training to introduce employees with technical innovations and to deepen knowledge in already known fields.</p>
            

           <div className="row g-4 my-5">
                {
                    course.map(course => <Course key={course.key} course={course}></Course> )
                }
           </div>

        </div>
    );
};

export default Courses;