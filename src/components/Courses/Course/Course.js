import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title, description, img, instructor, price} = props.course;
    return (
        <div className="col-lg-3 col-sm-12">
        <div className="card course-card">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <small>Instructor: <h5>{instructor}</h5></small>
    <p class="card-text">{description}</p>
    <h4>Price: ${price}</h4>
    <button href="/" class="btn btn-warning">Read more</button>
  </div>
</div>
        </div>
    );
};

export default Course;